const express = require('express');
const os = requiere('OS');
const app = express();

app.get('/',(req, res)=>{
    res.send(`
    <h1>Hola a todos</h1>
    <h2>Mi nombre es tu outa ma</h2>
    `)
})

app.listen(3000, () => {
    console.log("estoy en el puerto 3000")
})