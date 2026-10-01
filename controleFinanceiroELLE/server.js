import { createServer } from 'node:http';
const express = require('express');
const app = express();
const PORTA = 3000;

const server = createServer((req, res) => {
    console.log(`requisição recebida: ${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('servidor HTTP nativo funcionando!/n');

})

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
})