const express = require('express');

const app = express();

const baseDir = `../../www/`

app.use(express.static(`${baseDir}`))

app.listen(21041, () => 
	console.log('Servidor iniciado na porta 21041')
);

app.get('/Teste/', (req, res) => 
  res.sendFile('index.html' , { root : baseDir } )
);

app.get('/Teste/Home', (req, res) => 
  res.sendFile('index.html' , { root : baseDir } )
);

app.get('/Teste/ToDo', (req, res) => 
  res.sendFile('index.html' , { root : baseDir } )
);

app.get('/Teste/user', (req, res) => 
  res.send("ola")
);