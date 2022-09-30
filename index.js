const express = require('express');
const mendes = express();

   mendes.get('/', function(req, res){
    res.send('TUDO TOP!')
   })

/*LISTEN/CALLBACK*/
mendes.listen(3000, ()=>{
    console.log('TUDO BACANA!');
});

const express = require('express');
const routesCategoria = require('./route/routesCategorias');


const app = express();
console.log('teste Github');

app.use('/', routesCategoria);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});