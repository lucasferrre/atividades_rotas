const app = require('express')();
const fs = require('fs/promises');
const PORT = 2800;

// exercício 1
//rota para soma
app.get('/soma/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm + numDois;
        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).json({ erro: "Parâmetros inválidos. Por favor, digite números válidos." });
        }
        return res.status(200).send(`resultado da soma: ${resut}`);

    }catch(error){
        res.status(500).json({ erro: error.message });
    }
});

//rota para subtração
app.get('/subtracao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm - numDois;
        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).json({ erro: "Parâmetros inválidos. Por favor, digite números válidos." });
        }
        return res.status(200).send(`resultado da subtracao: ${resut}`);

    }catch(error){
        res.status(500).json({ erro: error.message });
    }
    
});

//rota para multiplicação
app.get('/multiplicacao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm * numDois;
        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).json({ erro: "Parâmetros inválidos. Por favor, digite números válidos." });
        }
        return res.status(200).send(`resultado da multiplicação: ${resut}`);

    }catch(error){
        res.status(500).json({ erro: error.message });
    }
});

//rota para divisão
app.get('/divisao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm / numDois;
        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).json({ erro: "Parâmetros inválidos. Por favor, digite números válidos." });
        }
        if(numDois === 0) {
            return res.status(400).json({ erro: "Divisão por zero não é permitida." });
        }
        return res.status(200).send(`resultado da divisão: ${resut}`);

    }catch(error){
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

