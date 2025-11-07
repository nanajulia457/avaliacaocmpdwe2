

const app = require('./src/app');
const PORT = 4000; // Define a porta obrigatória

// Inicia o servidor na porta 4000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
