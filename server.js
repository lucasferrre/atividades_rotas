const app = require('express')();
const PORT = 2900;

// exercício 5
// Crie uma rota /saudacao/:nome que receba o nome via path parameter.
// Receba via query parameter a hora do dia (hora) como número (0-23).
app.get('/saudacao/:nome', (req, res) => {
    const { nome } = req.params;
    const hora = parseInt(req.query.hora, 10);
    let saudacao;
  
    if (isNaN(hora) || hora < 0 || hora > 23) {
      return res.status(400).send('Erro: O parâmetro "hora" deve ser um número entre 0 e 23.');
    }
  
    if (hora >= 5 && hora < 12) {
      saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
      saudacao = 'Boa tarde';
    } else {
      saudacao = 'Boa noite';
    }
  
    return res.status(200).send(`${saudacao}, ${nome}!`);
  });

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

