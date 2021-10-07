import axios from "axios";
import { feedbackEndpoint } from "./Endpoints";

/**
 * Comments
 */

export async function getFeedback() {
  try {
    const response = await axios.get(feedbackEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postFeedback(content) {
  try {
    const response = await axios.post(feedbackEndpoint, {
      content,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
