import request from "supertest";
import server from "../server";
import Idea from "../models/ideaSchema";
const mockingoose = require("mockingoose");

const dummyIdeas = [
  {
    _id: "507f191e810c19729de860ea",
    content: "content",
    upVotes: 2,
    downVotes: 3,
    upVoters: [
      {
        _id: "507f191e810c19729de860eb",
        name: "Kevin",
        password: "Password",
      },
    ],
    downVoters: [
      {
        _id: "507f191e810c19729de860ec",
        name: "Kevin",
        password: "Password",
      },
    ],
    pinned: true,
    user: "Kevin",
  },
  {
    _id: "507f191e810c19729de860ed",
    content: "content",
    upVotes: 4,
    downVotes: 5,
    upVoters: [
      {
        _id: "507f191e810c19729de860ee",
        name: "Kevin",
        password: "Password",
      },
    ],
    downVoters: [
      {
        _id: "507f191e810c19729de860ef",
        name: "Kevin",
        password: "Password",
      },
    ],
    pinned: true,
    user: "Kevin",
  },
];

describe("/ideas endpoint", () => {
  it("GET Should return all ideas with 200", async () => {
    mockingoose(Idea).toReturn(dummyIdeas, "find");

    const res = await request(server).get("/api/ideas");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyIdeas);
  });

  it("GET with query should return query ideas with 200", async () => {
    mockingoose(Idea).toReturn(dummyIdeas, "find");

    const res = await request(server).get("/api/ideas").query({
      ids: "507f191e810c19729de860ea,507f191e810c19729de860ed",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyIdeas);
  });
});

describe("/idea endpoint", () => {
  it("POSTing valid data creates an idea with 201", async () => {
    mockingoose(Idea).toReturn(dummyIdeas[0], "save");

    const dummy = JSON.parse(JSON.stringify(dummyIdeas[0])); // Clone
    delete dummy._id;
    const res = await request(server).post("/api/idea").send(dummy);

    expect(res.status).toEqual(201);
    expect(res.body).toMatchObject(dummy);
  });

  it("POSTing invalid data returns 500", async () => {
    mockingoose(Idea).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      content: "Content",
      upVotes: 1,
    };
    const res = await request(server).post("/api/idea").send(dummy);

    expect(res.status).toEqual(500);
  });

  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/idea").send();

    expect(res.status).toEqual(400);
  });

  it("DELETEing valid id deletes an idea with 200", async () => {
    mockingoose(Idea).toReturn(true, "deleteOne");

    const res = await request(server).delete(`/api/idea/${dummyIdeas[0]._id}`);
    expect(res.status).toEqual(200);
  });

  it("DELETEing invalid id returns 404", async () => {
    mockingoose(Idea).toReturn(() => {
      throw "No good";
    }, "deleteOne");

    const res = await request(server).delete(`/api/idea/${dummyIdeas[0]._id}`);
    expect(res.status).toEqual(404);
  });
});
