import Message from "./models/message.js";

export const socket = (io) => {
  io.on("connection", async (socket) => {
    Msg.find().then((result) => {
      socket.emit("output-messages", result);
    });

    console.log("a user connected");
    socket.emit("message", "Hello world");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.on("chatmessage", (msg) => {
      const message = new Message({ msg });
      message.save().then(() => {
        io.emit("message", msg);
      });
    });
  });
  io.on("disconnect", (socket) => {
    console.log("Disconnected.");
  });
};
