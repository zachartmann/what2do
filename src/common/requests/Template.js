import axios from "axios";
import { templateEndpoint, templatesEndpoint } from "./Endpoints";

/**
 * Templates
 */

/**
 * Get all templates
 */

export async function getTemplates() {
  try {
    const response = await axios.get(templatesEndpoint);
    return response;
  } catch (err) {
    throw err;
  }
}

/**
 * Get a template by id
 */

export async function getTemplate(templateId) {
  try {
    const response = await axios.get(`${templateEndpoint}/${templateId}`);
    return response;
  } catch (err) {
    throw err;
  }
}

/**
 * Create a template
 */

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
