import axios from "axios";
import { templateEndpoint, templatesEndpoint } from "./Endpoints";

/**
 * Templates
 */

export async function getTemplates() {
  try {
    const response = await axios.get(templatesEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function getTemplate(templateId) {
  try {
    const response = await axios.get(`${templateEndpoint}/${templateId}`);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function postTemplate(title, category, theme, timeLimit, ideaIds) {
  try {
    const response = await axios.post(templateEndpoint, {
      title,
      category,
      theme,
      timeLimit,
      ideaIds,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
