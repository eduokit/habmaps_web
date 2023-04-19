import {env} from '../env'
const { io } = require("socket.io-client");

const socket = io(env.REACT_APP_API_URL);

console.log("Iniciando socketsxxx !!!!!");
//  wait until socket connects before adding event listeners
socket.on("connect", () => {

  socket.on("status:update", (data) => {
    console.log("Se updatea el status")
    console.log(data)
  });

  socket.on("status:create", (data) => {
    console.log("Se crea un status")
    console.log(data)
  });

  socket.on("frame:update", (data) => {
    console.log("Se updatea un frame")
    console.log(data)
  });

  socket.on("frame:create", (data) => {
    console.log("Se crea un frame")
    console.log(data)
  });

  socket.on("last-seen:update", (data) => {
    console.log("Se updatea un last-seen")
    console.log(data)
  });

  socket.on("last-seen:create", (data) => {
    console.log("Se creea un last-seen")
    console.log(data)
  });

});

