import express from "express";
import path from "path";
import { WebSocketServer } from "ws";

const PORT = 8080;

const log = function (message, color) {
    if (color) {
        console.log(`[SERVER]: ${color.chalkColor(message)}`);
    } else {
        console.log(message);
    }
};

const app = express();
app.use("/", express.static(path.resolve(process.cwd(), "../client")));

const server = app.listen(PORT, () => log(`Listening on port ${PORT}...`));

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    log("New client connected");

    socket.on("message", (message) => {
        log(`Received message: ${message}`);
    });

    socket.on("close", () => {
        log("Connection closed");
    });

    socket.send("Welcome to the WebSocket server!");
});
