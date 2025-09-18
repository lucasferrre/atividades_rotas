const app = require('express')();
const PORT = 2800;

// exercício 6
// Calculando o Índice de Massa Corporal (IMC) e retornando o resultado com a classificação (baixo peso, normal, sobrepeso, obesidade).
app.get('/imc', (req, res) => {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      return res.status(400).send('Erro: Parâmetros "peso" e "altura" são obrigatórios e devem ser números válidos. A altura deve ser maior que zero.');
    }
  
    const imc = peso / (altura * altura);
    let classificacao;
  
    if (imc < 18.5) {
      classificacao = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
  
    res.send(`Seu IMC é de: ${imc.toFixed(2)} - ${classificacao}`);
  });

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

