import mongoose from "mongoose";

// schema -> sert à dire que chaque post va avoir : un title, un message, un creation etc...
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  devoir: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
// on export un module mongoose de ce fichier
// plus tard on pourra faire des CRUD
