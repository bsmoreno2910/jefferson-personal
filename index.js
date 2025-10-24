const express = require("express");
const path = require("path");
const app = express();

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota principal - serve o index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Porta configurável via variável de ambiente
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', function () {
  console.log(`Jefferson Personal Online rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});

