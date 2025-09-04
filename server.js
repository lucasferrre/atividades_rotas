const app = require('express')();
const fs = require('fs/promises');
const PORT = 2900;


app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});

