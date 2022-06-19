import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  msg: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Message", messageSchema);
