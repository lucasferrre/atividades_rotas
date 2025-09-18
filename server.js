const app = require('express')();
const PORT = 2800;

// exercício 4
// Criando uma rota /ano/:ano que receba o ano via path parameter.
app.get('/ano/:ano', (req, res) => {
    const ano = parseInt(req.params.ano, 10);
  
    if (isNaN(ano)) {
      return res.status(400).send('Erro: O ano fornecido não é um número válido.');
    }
  
    const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  
    if (anoBissexto) {
      res.send(`O ano ${ano} é bissexto`);
    } else {
      res.send(`O ano ${ano} não é bissexto`);
    }
  });

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

