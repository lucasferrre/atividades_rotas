const app = require('express')();
const PORT = 2800;

// exercício 2
//Criando uma rota /calculadora que recebe os parâmetros via query
app.get('/calculadora', async (req, res) => {
    try {
        const { operacao, numUm, numDois } = req.query;
        const n1 = parseFloat(numUm);
        const n2 = parseFloat(numDois);
        let result;

        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).send('Erro: Parâmetros "numUm" e "numDois" devem ser números válidos.');
        }

        if(operacao === 'soma'){
            result = n1 + n2;
        }else if(operacao === 'subtracao'){
            result = n1 - n2;
        }else if(operacao === 'multiplicacao'){
            result = n1 * n2;
        }else if(operacao === 'divisao'){
            if(n2 === 0){
                return res.status(400).send('Erro: Divisão por zero não é permitida.');
            }
            result = n1 / n2;
        }
        else{
            return res.status(400).send('Erro: Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".');
        }
        return res.status(200).send(`O resultado da ${operacao} é: ${result}`);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }

});

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

