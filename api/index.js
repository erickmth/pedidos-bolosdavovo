// api/index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Lista de pedidos
let pedidos = [];

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota para receber um pedido (POST /api/pedido)
app.post('/api/pedido', (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.status(201).send('Pedido recebido com sucesso!');
});

// Rota para listar todos os pedidos (GET /api/pedidos)
app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
