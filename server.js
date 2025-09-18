const app = require('express')();
const fs = require('fs/promises');
const PORT = 2900;


app.get('/calculadora/operacao:/numUm:/numDois:', async (req, res) => {
    try {
        const { valor } = req.query;
        const dadosJson = await lerJson('./produtos.json');
        const dadosFiltrados = await filtroPorValor(dadosJson, valor);
        res.status(200).json(dadosFiltrados);
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

