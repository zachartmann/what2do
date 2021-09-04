/**
 * Schema definition
 */
 const Poll = new Schema();

 Poll.add({
   _id: Number,
   pollId: Number,
   title: String,
   endDate: Date,
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
 
 export default Poll;
 