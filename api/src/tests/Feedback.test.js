import request from "supertest";
import server from "../server";
import Feedback from "../models/feedbackSchema";
const mockingoose = require("mockingoose");

const dummyFeedback = [
  {
    _id: "507f191e810c19729de860ba",
    content: "Awesome website, my friends and I use it all the time!",
  },
  {
    _id: "507f191e810c19729de860bb",
    content: "Good concept but needs some UI/UX improvements",
  },
];

describe("/feedback endpoint", () => {
  it("GET Should return all feedback submissions with 200", async () => {
    mockingoose(Feedback).toReturn(dummyFeedback, "find");
    const expectedDummyFeedback = JSON.parse(JSON.stringify(dummyFeedback));

    const res = await request(server).get("/api/feedback");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedDummyFeedback);
  });

  it("POSTing valid data for new feedback returns 201", async () => {
    const dummy = JSON.parse(JSON.stringify(dummyFeedback[0])); // Clone
    delete dummy._id;
    mockingoose(Feedback).toReturn(dummy, "save");

    const res = await request(server).post("/api/feedback").send(dummy);

    expect(res.status).toEqual(201);
  });

  it("POSTing invalid data returns 500", async () => {
    mockingoose(Feedback).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      downVotes: 3,
      upVotes: 1,
    };
    const res = await request(server).post("/api/feedback").send(dummy);

    expect(res.status).toEqual(500);
  });

  //   it("POSTing no data returns 400", async () => {
  //     const res = await request(server).post("/api/poll").send();

  //     expect(res.status).toEqual(400);
  //   }); // TODO
});
