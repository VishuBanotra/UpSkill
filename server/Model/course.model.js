import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  star: {
    type: Number,
  },
  review: {
    type: String,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    default: true,
  },
  imgLink: {
    type: String,
    default: "",
  },
  videolink: [
    {
      type: String,
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
