import axios from "axios";
import { pollsEndpoint, pollEndpoint } from "./Endpoints";

/**
 * Polls
 */

export async function fetchPolls() {
  try {
    const response = await axios.get(pollsEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postPoll(pollId, title, endDate, timeLimit, ideaIds) {
  try {
    const response = await axios.post(pollEndpoint, {
      pollId,
      title,
      endDate,
      timeLimit,
      ideaIds,
    });
    return response;
  } catch (err) {
    throw err;
  }
}