import axios from "axios";
import { commentsEndpoint, commentEndpoint } from "./Endpoints";

/**
 * Comments
 */

export async function getComments() {
  try {
    const response = await axios.get(commentsEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postComment(commentId, comment, user) {
  try {
    const response = await axios.post(commentEndpoint, {
      commentId,
      comment,
      user,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
