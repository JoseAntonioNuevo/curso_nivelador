const express = require('express')
const app = express()
const port = 3000

var cowsay = require("cowsay");

app.get('/', (req, res) => {  
    res.send(cowsay.say({
        text : req.query.msg,
        e : "oO",
        T : "U "
    }));
  })

app.post('/', (req, res) => {  
    res.send(cowsay.say({
        text : req.query.msg,
        e : "oO",
        T : "U "
    }));
  }) 


app.listen(port, () => {
  console.log(`Bienvenido, escribe tu mensaje usando http://localhost:${port}?msg="TU MENSAJE"`)
})