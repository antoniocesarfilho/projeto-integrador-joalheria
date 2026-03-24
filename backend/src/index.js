const express = require('express');
const app = express();
const router = require('./routes');

// Middleware para permitir envio de JSON
app.use(express.json());

// Rota base da API
app.use('/api', router);

// Porta de escuta
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});