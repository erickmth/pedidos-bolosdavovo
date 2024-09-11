// api/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Lista de pedidos
let pedidos = [];

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota para receber um pedido (POST /pedido)
app.post('/pedido', (req, res) => {
  const pedido = req.body;  // Recebe o pedido do frontend
  pedidos.push(pedido);  // Adiciona o pedido na lista de pedidos
  res.status(201).send('Pedido recebido com sucesso!');  // Responde com uma mensagem de sucesso
});

// Rota para listar todos os pedidos (GET /pedidos)
app.get('/pedidos', (req, res) => {
  res.json(pedidos);  // Retorna todos os pedidos
});

module.exports = app;
