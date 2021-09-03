/**
 * Schema definition
 */
const Template = new Schema();

Template.add({
  title: String,
  category: String,
  theme: String,
  timeLimit: Number,
  ideaIds: [Number],
});


/**
 * Accessing a specific schema type by key
 */

/**
 * Methods
 */

/**
 * Define model.
 */

export default Template;
