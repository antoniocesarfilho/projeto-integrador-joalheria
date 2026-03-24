const express = require('express');
const router = express.Router();

/**
 * Rota de saúde simples para verificar que a API está funcionando.
 * Retorna uma mensagem JSON.
 */
router.get('/', (req, res) => {
  res.json({ message: 'API de gestão de estoque de joalheria funcionando' });
});

module.exports = router;