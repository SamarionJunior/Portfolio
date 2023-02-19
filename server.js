const express = require('express');
// const path = require('path')

const app = express();

const baseDir = `${__dirname}`

app.use(express.static(`${baseDir}`))

app.use(express.static('../www/public'));

app.listen(21041, () => 
	console.log('Servidor iniciado na porta 21041')
);

app.get('/Teste', (req, res) => 
  res.sendFile('index.html' , { root : "../www" } )
);

app.get('/Teste/user', (req, res) => 
  res.send("oi")
);

// import express from 'express';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// const baseDir = `${__dirname}`

// console.log(baseDir)

// app.use(express.static(`${baseDir}`))

// app.listen(3000, () => 
// 	console.log('Servidor iniciado na porta 3000')
// );

// app.get('/', (req, res) => 
//   res.sendFile('index.html' , { root : baseDir } )
// );