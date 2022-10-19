import io from "socket.io-client"
 
let socket;

export const init = () => {
    console.log("sunucuya bağlanılıyor");
    socket=io("https://localhost:3001",{transports : ["websocket"],});

    socket.on("connect" , () => console.log("sunucuya bağlantı başarıyla gerçekleşti"));
};

export const send = ( color) => {
    socket.emit('newColor' , color)
}