const app = require('express')();
const fs = require('fs/promises');
const PORT = 2900;

app.get('/operacao/:tipo', (req, res) => {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;
  
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);
    let resultado;
  
    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).json({ erro: 'Os parâmetros "numUm" e "numDois" são obrigatórios e devem ser números.' });
    }
  
    switch (tipo) {
      case 'soma':
        resultado = n1 + n2;
        break;
      case 'subtracao':
        resultado = n1 - n2;
        break;
      case 'multiplicacao':
        resultado = n1 * n2;
        break;
      case 'divisao':
         if (n2 === 0) {
          return res.status(400).json({ erro: 'Não é possível dividir por zero.' });
        }
        resultado = n1 / n2;
        break;
      default:
        return res.status(400).json({ erro: 'Operação inválida. Use: soma, subtracao, multiplicacao, divisao.' });
    }
  
    res.json({ resultado: resultado });
  });


// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

