const app = require('express')();
const PORT = 2900;

// exercicio 3
// Criando uma rota /operacao/:tipo onde tipo é a operação matemática (soma, subtracao, multiplicacao, divisao).

app.get('/operacao/:tipo', (req, res) => {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;
  
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);
    let resultado;
  
    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).send({ erro: 'Os parâmetros "numUm" e "numDois" são obrigatórios e devem ser números.' });
    }

    if(tipo === 'soma') {
        resultado = n1 + n2;
    } else if(tipo === 'subtracao') {
        resultado = n1 - n2;
    } else if(tipo === 'multiplicacao') {
        resultado = n1 * n2;
    } else if(tipo === 'divisao') {
        if(n2 === 0) {
            return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
        }
        resultado = n1 / n2;
    } else {
        return res.status(400).json({ erro: 'Tipo de operação inválido. Use "soma", "subtracao", "multiplicacao" ou "divisao".' });
    }
  
    return res.status(200).send(`O resutado da ${tipo} é: ${resultado}`);
  });


// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

