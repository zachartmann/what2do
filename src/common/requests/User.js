import axios from "axios";
import { userEndpoint, loginEndpoint } from "./Endpoints";

/**
 * User
 */

export async function getUser(name, password) {
  try {
    const response = await axios.post(loginEndpoint, {
      name,
      password,
    });
    return response;
  } catch (err) {
    return err.response.data;
  }
}

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
