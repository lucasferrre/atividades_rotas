const app = require('express')();
const fs = require('fs/promises');
const PORT = 2900;

// exercício 5
app.get('/saudacao/:nome', (req, res) => {
    const { nome } = req.params;
    const hora = parseInt(req.query.hora, 10);
  
    if (isNaN(hora) || hora < 0 || hora > 23) {
      return res.status(400).send('Erro: O parâmetro "hora" deve ser um número entre 0 e 23.');
    }
  
    let saudacao;
    if (hora >= 5 && hora < 12) {
      saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
      saudacao = 'Boa tarde';
    } else {
      saudacao = 'Boa noite';
    }
  
    res.send(`${saudacao}, ${nome}!`);
  });

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

