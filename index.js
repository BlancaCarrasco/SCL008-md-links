#!/usr/bin/env node
// module.exports = () => {
//   // ...
// };
// const math = require('./src/math');
// console.log(math.add(2,2))
// console.log(math.multiply(3,5))
const fs= require ('fs');
const markdownLinkExtractor = require('markdown-link-extractor');


// fs.readFile ('README.md','utf-8',(error, data)=>{
//   if (error){
//     console.log(`Error ${error}`);
//   }else{
//     console.log(data);
//   }
// })



let markdown = fs.readFileSync('README.md').toString();

let links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});

