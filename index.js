const express = require('express');
const mendes = express();

   mendes.get('/', function(req, res){
    res.send('TUDO TOP!')
   })

/*LISTEN/CALLBACK*/
mendes.listen(3000, ()=>{
    console.log('TUDO BACANA!');
});