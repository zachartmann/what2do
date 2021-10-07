import axios from "axios";
import { ideasEndpoint, ideaEndpoint } from "./Endpoints";
import { postPollIdea } from "./Poll";

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

export async function updateIdea(_id, content, upVotes, downVotes, pinned) {
  try {
    const response = await axios.post(ideaEndpoint, {
      _id,
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

export async function deleteIdea(_id) {
  try {
    const response = await axios.delete(`${ideaEndpoint}/${_id}`);

    return response;
  } catch (err) {
    throw err;
  }
}

export async function postIdea(
  poll_id,
  content,
  upVotes,
  downVotes,
  pinned,
  user
) {
  try {
    // Create idea record in database
    user = user ? user : "Anonymous";
    const ideaResponse = await axios.post(ideaEndpoint, {
      content,
      upVotes,
      downVotes,
      upVoters: [],
      downVoters: [],
      pinned,
      user,
    });
    console.log(`Idea created by: ${user}`);

    // Link created idea to poll
    await postPollIdea(poll_id, ideaResponse.data._id);
    return ideaResponse;
  } catch (err) {
    throw err;
  }
}
