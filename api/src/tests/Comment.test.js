import request from "supertest";
import server from "../server";
import CommentModel from "../models/commentSchema";
const mockingoose = require("mockingoose");

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

describe("Comments endpoint", () => {
  it("Get should return all comments with 200", async () => {
    mockingoose(CommentModel).toReturn(dummyComments, "find");

    const res = await request(server).get("/api/comments");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyComments);
  });

  it("Get with comment should return comments ideas with 200", async () => {
    mockingoose(CommentModel).toReturn(dummyComments[0], "find");

    const res = await request(server).get("/api/comments").query({
      comment: "This is a comment",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(dummyComments[0]);
  });
});

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

  it("POSTing a valid comment creates a comment with 201", async () => {
    mockingoose(CommentModel).toReturn(dummyComments[0], "save");

    const dummy = JSON.parse(JSON.stringify(dummyComments[0]));
    delete dummy._id;
    const res = await request(server).post("/api/comment").send(dummy);

    expect(res.status).toEqual(201);
    expect(res.body).toMatchObject(dummy);
  });

  it("POSTing no data returns 400", async () => {
    const res = await request(server).post("/api/comment").send();

    expect(res.status).toEqual(400);
  });
});
