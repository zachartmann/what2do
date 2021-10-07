import axios from "axios";
import { userEndpoint } from "./Endpoints";

/**
 * User
 */

export async function postUser(name, password) {
  try {
    const response = await axios.post(userEndpoint, {
      name,
      password,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
