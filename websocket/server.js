const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    // Kirim pesan ke klien saat terhubung
    ws.send('Hello, Client!');

    ws.on('message', (message) => {
        console.log('received: %s', message);
        // Kirim pesan kembali ke klien
        ws.send(`Server says: ${message}`);
    });
});
