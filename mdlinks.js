#!/usr/bin/env node

const chalk = require('chalk'); // Le da color al texto en la consola
const figlet = require('figlet'); // Texto bonito para titulo
const minimist = require('minimist'); // Permite leer parametros al ejecutar
const fs = require('fs'); // Permite manejar archivos
// const fetch = require('node-fetch');
var marked = require('marked');


// const errorYFinalizar = (texto) => {
//   console.log(chalk.red('Error: ', texto, '\existe un error'));
//   process.exit(0);
// };

// const mdlinks = (path) => {
//   // Validar la ruta
//   if (fs.exists(path)) {
//       console.log('existe la ruta');
//       // Verificamos que sea un archivo, por que una ruta puede ser valida, pero ser una carpeta
//       if (fs.stat(path).isFile()) {
//           // Verificamos que sea un archivo .md
//           const arrCadenas = path.split('.');
//           if (arrCadenas[1] === 'md') {
//               return true;
//           }
//       }
//       return false;
//   }
// };
// const getParams = () => {
//   const args = minimist(process.argv.slice(2));
//   let parametros = {
//       validate: [ ],
//       stats: [ ],
//       file: [ ]
//   };
//   if (args._.length) {
//       args._.forEach((url) => {
//           const existe = mdLinks(url);
//           if (!existe) {
//               errorYFinalizar(`Archivo invalido: ${url}`);
//           }
//           parametros.file.push(url);
//       })
//   } else {
//       errorYFinalizar('Debe haber al menos un archivo');
//   }
//   if (args.validate) {
//       parametros.validate = validate;
//   }
//   if (args.stats) {
//       parametros.stats = stats
//   }
//   return parametros;
// };


// module.exports = {
 
//   getParams,
//   mdlinks
  
// };