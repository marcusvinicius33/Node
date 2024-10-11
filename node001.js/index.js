const express = require("express")

const app = express() /* um atalho pra usar o express */

app.listen(3000, {} => {
    console.log("Meu servidor está rodando!")
})