import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create model class
const PostModel = mongoose.model('Note', NoteSchema);

export default PostModel;