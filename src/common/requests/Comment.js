import axios from "axios";
import { commentsEndpoint, commentEndpoint } from "./Endpoints";

/**
 * Comments
 * This is for the Comment Requests and is exporting the getComment and postComment functions
 * It also imports the commentsEndpoint and commentEndpoint
 */

export async function getComments() {
  try {
    const response = await axios.get(commentsEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postComment(comment, user) {
  try {
    const response = await axios.post(commentEndpoint, {
      comment,
      user,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
