import request from "supertest";
import server from "../server";
import SuggestionModel from "../models/suggestionSchema";
const mockingoose = require("mockingoose");

const dummySuggestions = [
  {
    _id: "507f191e810c19729de860ea",
    suggestion: "Lets go park",
    category: "where2go",
  },
  {
    _id: "507f191e810c19729de860eb",
    suggestion: "Lets play monopoly",
    category: "what2play",
  },
  {
    _id: "507f191e810c19729de860eb",
    suggestion: "Lets do the twist!",
    category: "what2do",
  },
];

describe("Suggestions endpoint", () => {
  it("Get should return all suggestions with 200", async () => {
    mockingoose(SuggestionModel).toReturn(dummySuggestions, "find");

    const res = await request(server).get("/api/suggestions");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummySuggestions);
  });

  it("Get with category should return category ideas with 200", async () => {
    mockingoose(SuggestionModel).toReturn(dummySuggestions[0], "find");

    const res = await request(server).get("/api/suggestions").query({
      category: "where2go",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummySuggestions[0]);
  });
});

describe("Suggestion endpoint", () => {
  it("POSTing invalid data returns 500", async () => {
    mockingoose(SuggestionModel).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      category: "shouldn't work",
    };
    const res = await request(server).post("/api/suggestion").send(dummy);

    expect(res.status).toEqual(500);
  });

  it("POSTing a valid suggestion creates a suggestion with 201", async () => {
    mockingoose(SuggestionModel).toReturn(dummySuggestions[0], "save");

    const dummy = JSON.parse(JSON.stringify(dummySuggestions[0]));
    delete dummy._id;
    const res = await request(server).post("/api/suggestion").send(dummy);

    expect(res.status).toEqual(201);
    expect(res.body).toMatchObject(dummy);
  });

  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/suggestion").send();

    expect(res.status).toEqual(400);
  });
});
