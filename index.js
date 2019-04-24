#!/usr/bin/env node

const fs= require ('fs');// Permite manejar archivos
const markdownLinkExtractor = require('markdown-link-extractor');
const path = require('path');
const mdlinks = require('./mdlinks');
const chalk = require('chalk'); // Le da color al texto en la consola
const figlet = require('figlet'); // Texto bonito para titulo

const fetch = require('fetch');
const fetchUrl= fetch.fetchUrl;

const validate = process.argv.indexOf("--validate");

const init = () => {
    console.log(
        chalk.yellow(
            figlet.textSync("MD-LINKS", {
                font: "Contrast",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
  }; 
  init();    // Imprimimos pantalla de inicio

const mdLinks = (path) => {
    // Validar la ruta
    if (fs.exists(path)) {
        console.log('existe la ruta');
        // Verificamos que sea un archivo, por que una ruta puede ser valida, pero ser una carpeta
        if (fs.stat(path).isFile()) {
            // Verificamos que sea un archivo .md
            const arrCadenas = path.split('.');
            if (arrCadenas[1] === 'md') {
                return true;
            }
        }
        return false;
    }
};

fs.readFile ('README.md','utf-8',(error, data)=>{
  if (error){
    console.log(error);
  }else{
    console.log(data);
  }
})

let markdown = fs.readFileSync('README.md').toString();

let links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);

const getData = (link)=>{
    return new Promise((resolve,reject)=>{
      fetchUrl(link,(error,meta,body)=>{
        if (meta){
          if (meta){
            resolve(meta.status.toString());
          }
        }else{
          reject(error);
        }
      })
    })
  }
  let links="link"
getData(link)
    .then(res=>{
      if(res==200)
      console.log("el estado de",link,"es:",res);
    })
    .catch(err=>{
      console.log(err);
    });
})