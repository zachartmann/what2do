import request from "supertest";
import server from "../server";
import CommentModel from "../models/commentSchema";
const mockingoose = require("mockingoose");

// This is the Comment.test code it is used fo the Backend API Unit Testing
// The details have also been explained in the report section for Juanita
// At a high level though:
// Parsing in a set of dummyComments which are identified by the id, and include the user, and comment it self
// Mocking goose is used to mock the data MongoDB would return

const dummyComments = [
  {
    _id: "615ed5fa846b151653a6ad73",
    comment: "This is a comment",
    user: "juanita",
  },
  {
    _id: "615ed676982ce7cbe6f56408",
    comment: "This is another comment I think",
    user: "Juanitaa",
  },
  {
    _id: "615ed6d7d6a64eea54351e9e",
    comment: "Comment thing",
    user: "Juanitta",
  },
];

// This is the Get request, the title of each request is self explanatory
// i.e This one excpets a Get Request sent return all comments should have a 200 status

describe("Comments endpoint", () => {
  it("Get should return all comments with 200", async () => {
    mockingoose(CommentModel).toReturn(dummyComments, "find");

    const res = await request(server).get("/api/comments");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyComments);
  });

  // Similarly this request expects a Get Request return a comment for comments ideas with a 200 status code
  it("Get with comment should return comments ideas with 200", async () => {
    mockingoose(CommentModel).toReturn(dummyComments[0], "find");

    const res = await request(server).get("/api/comments").query({
      comment: "This is a comment",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyComments[0]);
  });
});

// These are the Post Requests tests
// This one expects that sending a post with invalid data will return a 500 status code
describe("Comment endpoint", () => {
  it("POSTing invalid data returns 500", async () => {
    mockingoose(CommentModel).toReturn(() => {
      throw "No good";
    }, "save");

    const dummy = {
      comment: "shouldn't work",
    };
    const res = await request(server).post("/api/comment").send(dummy);

    expect(res.status).toEqual(500);
  });

  // This test expects that posting a valid comment will return a 200 status code
  it("POSTing a valid comment creates a comment with 201", async () => {
    mockingoose(CommentModel).toReturn(dummyComments[0], "save");

    const dummy = JSON.parse(JSON.stringify(dummyComments[0]));
    delete dummy._id;
    const res = await request(server).post("/api/comment").send(dummy);

    expect(res.status).toEqual(201);
    expect(res.body).toMatchObject(dummy);
  });

  // This post request expects that posting no data will return status code of 400
  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/comment").send();

    expect(res.status).toEqual(400);
  });
});
