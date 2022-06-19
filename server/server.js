import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

import { socket } from "./socket.js";
import connectMongoDb from "./config/database.js";

dotenv.config();

connectMongoDb();

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
socket(io);

// app.use(express.json());

// app.use("/");

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server running on port ${PORT}`));
