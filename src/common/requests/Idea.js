import axios from "axios";
import { ideasEndpoint, ideaEndpoint } from "./Endpoints";

/**
 * Ideas
 */

export async function getIdeas(ids = null) {
  // If multiple Idea IDs are provided get all of them from DB
  if (ids) {
    try {
      const response = await axios.get(ideasEndpoint, {
        params: {
          ids: ids.toString(),
        },
      });
      return response;
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const response = await axios.get(ideasEndpoint);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export async function postIdea(
  content,
  upVotes,
  downVotes,
  pinned,
  user = "Anonymous"
) {
  try {
    const response = await axios.post(ideaEndpoint, {
      content,
      upVotes,
      downVotes,
      upVoters: [],
      downVoters: [],
      pinned,
      user,
    });
    console.log(`fire${response._id}`);
    return response;
  } catch (err) {
    throw err;
  }
}
