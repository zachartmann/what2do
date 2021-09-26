import axios from "axios";
import { templatesEndpoint } from "./Endpoints";

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
