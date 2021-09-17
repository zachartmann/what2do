import axios from "axios";

/**
 * Endpoints
 */

const pollsEndpoint = "/api/polls";
const pollEndpoint = "/api/poll";
const ideasEndpoint = "/api/ideas";
const ideaEndpoint = "/api/idea";
const commentsEndpoint = "/api/comments";
const commentEndpoint = "/api/comment";
const templatesEndpoint = "/api/templates";
const templateEndpoint = "/api/template";
const suggestionsEndpoint = "/api/suggestions";
const suggestionEndpoint = "/api/suggestion";

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

/**
 * Comments
 */

export async function fetchComments() {
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

/**
 * Templates
 */

export async function fetchTemplates() {
  try {
    const response = await axios.get(templatesEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

/**
 * Suggestions
 */

export async function fetchSuggestions() {
  try {
    const response = await axios.get(suggestionsEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postSuggestion(suggestion, category) {
  try {
    const response = await axios.post(suggestionEndpoint, {
      suggestion,
      category,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
