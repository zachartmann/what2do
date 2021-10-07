import request from "supertest";
import server from "../server";
import Template from "../models/templateSchema";
const mockingoose = require("mockingoose");

const dummyTemplates = [
  {
    _id: "615eef012bfa7954bb11d48a",
    title: "What2Do",
    category: "what2do",
    theme: "",
    timeLimit: 30,
    ideaIds: ["0", "1"],
  },
  {
    _id: "615eef012bfa7954bb11d48b",
    title: "Where2Go",
    category: "where2go",
    theme: "",
    timeLimit: 10,
    ideaIds: ["2", "3"],
  },
];

describe("/templates endpoint", () => {
  it("GET Should return all templates with 200", async () => {
    mockingoose(Template).toReturn(dummyTemplates, "find");
    const expectedDummyTemplates = JSON.parse(JSON.stringify(dummyTemplates));

    const res = await request(server).get("/api/templates");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedDummyTemplates);
  });
});

describe("/template/:id endpoint", () => {
  it("GET valid template returns 200", async () => {
    mockingoose(Template).toReturn(dummyTemplates[0], "findOne");
    const expectedDummyTemplate = JSON.parse(JSON.stringify(dummyTemplates[0]));

    const res = await request(server).get(
      `/api/template/${dummyTemplates[0]._id}`
    );

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedDummyTemplate);
  });

  it("GET invalid template returns 404", async () => {
    mockingoose(Template).toReturn(() => {
      throw "No good";
    }, "findOne");

    const res = await request(server).get(
      `/api/template/${dummyTemplates[0]._id}`
    );

    expect(res.status).toEqual(404);
  });

  it("GET invalid request returns 404", async () => {
    const res = await request(server).get(`/api/template/`);

    expect(res.status).toEqual(404);
  });

  it("POSTing valid data returns 201", async () => {
    mockingoose(Template).toReturn(dummyTemplates[0], "save");

    const res = await request(server)
      .post("/api/template")
      .send(dummyTemplates[0]);

    expect(res.status).toEqual(201);
  });

  it("POSTing invalid data returns 500", async () => {
    mockingoose(Template).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      content: "Content",
      upVotes: 1,
    };
    const res = await request(server).post("/api/template").send(dummy);

    expect(res.status).toEqual(500);
  });

  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/template").send();

    expect(res.status).toEqual(400);
  });

  it("DELETEing valid id deletes a template with 200", async () => {
    mockingoose(Template).toReturn(true, "deleteOne");

    const res = await request(server).delete(
      `/api/template/${dummyTemplates[0]._id}`
    );
    expect(res.status).toEqual(200);
  });

  it("DELETEing invalid id returns 404", async () => {
    mockingoose(Template).toReturn(() => {
      throw "No good";
    }, "deleteOne");

    const res = await request(server).delete(
      `/api/template/${dummyTemplates[0]._id}`
    );
    expect(res.status).toEqual(404);
  });

  it("DELETEing with no id returns 404", async () => {
    const res = await request(server).delete("/api/template/"); // Caught by server.js :51

    expect(res.status).toEqual(404);
  });
});
