const app = require('express')();
const fs = require('fs/promises');
const PORT = 2800;


app.get('/soma/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm + numDois;
        return res.status(200).json(`resultado da soma: ${resut}`);
    }catch(error){
        res.status(500).json({ erro: error.message });
    }

    
});

app.get('/subtracao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm - numDois;
        return res.status(200).json(`resultado da subtracao: ${resut}`);
    }catch(error){
        res.status(500).json({ erro: error.message });
    }
    
});

app.get('/multiplicacao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm * numDois;
        return res.status(200).json(`resultado da multiplicacao: ${resut}`);
    }catch(error){
        res.status(500).json({ erro: error.message });
    }
});

app.get('/divisao/:numUm/:numDois', async (req, res) => {
    try{
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);
        const resut = numUm / numDois;
        if(numDois === 0) {
            return res.status(400).json({ erro: "Divisão por zero não é permitida." });
        }
        return res.status(200).json(`resultado da divisao: ${resut}`);
    }catch(error){
        res.status(500).json({ erro: error.message });
    }
});


app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

