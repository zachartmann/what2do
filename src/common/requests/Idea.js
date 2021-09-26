import axios from "axios";
import { ideasEndpoint, ideaEndpoint } from "./Endpoints";

/**
 * Ideas
 */

export async function fetchIdeas() {
  try {
    const response = await axios.get(ideasEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postIdea(content, upVotes, downVotes, pinned) {
  try {
    const response = await axios.post(ideaEndpoint, {
      content,
      upVotes,
      downVotes,
      pinned,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
