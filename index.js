console.log("Hello, World")
const ng = require('name-generate');
const cs = require("cowsayjs");

let name1=ng.first();
let last1=ng.last();

let name2=ng.first();
let last2=ng.last();

let fn1=name1+" "+last1;
let fn2=name2+" "+last2;



console.log(cs.moo(`mi nombre es ${fn1}`,{
    cow:"dragon"
}));

console.log(cs.moo(`y el mio es ${fn2}`,{
    cow:"skeleton"
}));