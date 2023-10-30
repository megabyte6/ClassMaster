const socket = new WebSocket(`ws://localhost:8080`);

socket.onmessage = ({ data }) => {
    console.log(`Message from server: ${data}`);
};

document.getElementById("send").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    console.log("Sending message to server: " + message);
    socket.send(message);
});
