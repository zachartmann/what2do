import request from "supertest";
import server from "../server";
import Poll from "../models/pollSchema";
const mockingoose = require("mockingoose");

const dummyPolls = [
  {
    _id: "507f191e810c19729de860ea",
    pollId: "ABCDEF",
    title: "Title1",
    endDate: new Date(),
    timeLimit: 10,
    ideaIds: ["0", "1"],
    theme: "Pool Party",
  },
  {
    _id: "507f191e810c19729de860eb",
    pollId: "GHIJK",
    title: "Title2",
    endDate: new Date(),
    timeLimit: 20,
    ideaIds: ["2", "3"],
    theme: "Bowling",
  },
];

describe("/polls endpoint", () => {
  it("GET Should return all polls with 200", async () => {
    mockingoose(Poll).toReturn(dummyPolls, "find");
    const expectedDummyPolls = JSON.parse(JSON.stringify(dummyPolls));

    const res = await request(server).get("/api/polls");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedDummyPolls);
  });
});

describe("/poll endpoint", () => {
  it("GET valid poll returns 200", async () => {
    mockingoose(Poll).toReturn(dummyPolls[0], "findOne");
    const expectedDummyPoll = JSON.parse(JSON.stringify(dummyPolls[0]));

    const res = await request(server).get(`/api/poll/${dummyPolls[0]._id}`);

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedDummyPoll);
  });

  it("GET invalid poll returns 404", async () => {
    mockingoose(Poll).toReturn(() => {
      throw "No good";
    }, "findOne");

    const res = await request(server).get(`/api/poll/${dummyPolls[0]._id}`);

    expect(res.status).toEqual(404);
  });

  it("GET invalid request returns 404", async () => {
    const res = await request(server).get(`/api/poll/`); // Caught by server.js :51

    expect(res.status).toEqual(404);
  });

  it("POSTing valid data with ID updates poll and returns 200", async () => {
    mockingoose(Poll).toReturn(dummyPolls[0], "save");

    const res = await request(server).post("/api/poll").send(dummyPolls[0]);

    expect(res.status).toEqual(200);
  });

  it("POSTing valid data for new poll returns 201", async () => {
    const dummy = JSON.parse(JSON.stringify(dummyPolls[0])); // Clone
    delete dummy._id;
    mockingoose(Poll).toReturn(dummy, "save");

    const res = await request(server).post("/api/poll").send(dummy);

    expect(res.status).toEqual(201);
  });

  it("POSTing invalid data returns 500", async () => {
    mockingoose(Poll).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      content: "Content",
      upVotes: 1,
    };
    const res = await request(server).post("/api/poll").send(dummy);

    expect(res.status).toEqual(500);
  });

  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/poll").send();

    expect(res.status).toEqual(400);
  });

  it("DELETEing valid id deletes an poll with 200", async () => {
    mockingoose(Poll).toReturn(true, "deleteOne");

    const res = await request(server).delete(`/api/poll/${dummyPolls[0]._id}`);
    expect(res.status).toEqual(200);
  });

  it("DELETEing invalid id returns 404", async () => {
    mockingoose(Poll).toReturn(() => {
      throw "No good";
    }, "deleteOne");

    const res = await request(server).delete(`/api/poll/${dummyPolls[0]._id}`);
    expect(res.status).toEqual(404);
  });

  it("DELETEing with no id returns 404", async () => {
    const res = await request(server).delete("/api/poll/"); // Caught by server.js :51

    expect(res.status).toEqual(404);
  });
});
