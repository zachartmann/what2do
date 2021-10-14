import axios from "axios";
import { environmentEndpoint } from "./Endpoints";

/**
 * Environment
 */

export async function getEnvironment() {
  try {
    const response = await axios.get(environmentEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}
