console.log("Hello, World")
const ng = require('name-generate');
const cow = require('cowsayjs');

let name=ng.first();
let last=ng.last();
let fn=name+" "+last;

let cs = require("cowsayjs");

console.log(cs.moo(`mi nombre es ${fn}`,{
    cow:"dragon"
}));

console.log(cs.moo(`y el mio es ${fn}`,{
    cow:"skeleton"
}));