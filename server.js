const app = require('express')();
const fs = require('fs/promises');
const PORT = 2900;


app.get('/calculadora/:operacao/:numUm/:numDois', async (req, res) => {
    try {
        const { operacao, numUm, numDois } = req.query;
        const n1 = parseFloat(numUm);
        const n2 = parseFloat(numDois);
        let result;

        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).send('Erro: Parâmetros "numUm" e "numDois" devem ser números válidos.');
        }

        switch (operacao) {
            case 'soma':
                result = n1 + n2;
                break;
            case 'subtracao':
                result = n1 - n2;
                break;
            case 'multiplicacao':
                result = n1 * n2;
                break;
            case 'divisao':
                if (n2 === 0) {
                    return res.status(400).send('Erro: Divisão por zero não é permitida.');
                }
                result = n1 / n2;
                break;
            default:
                return res.status(400).send('Erro: Operação inválida. Use soma, subtracao, multiplicacao ou divisao.');
        }

        return res.status(200).send(`resultado da soma: ${result}`);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }

});

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

