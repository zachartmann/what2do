import axios from "axios";
import { suggestionsEndpoint, suggestionEndpoint } from "./Endpoints";

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
