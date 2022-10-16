var nome = 'Brenno'; //String
    idade = 20, //Number
    possuiFaculdade = false, //Boolean
    //proficao, //undefined
    comida = null, //null;
    simbolo = Symbol(), //Symbol
    novoObjeto = {}; //Object

    console.log(typeof simbolo)

var nome1 = 'Brenno',
    sobrenome = 'Cavalcante',
    nomecompleto = nome1 + sobrenome;

console.log(nome1 + ' ' + sobrenome);
console.log(nomecompleto);

var gols = 1000;
var frase = 'Romário fez mais de ' + gols + ' gols';
console.log(frase);
console.log(typeof frase);

var frase1 = "GOD OF WAR é o melhor 'jogo'";
var frase2 = "GOD OF WAR é o melhor \"jogo\"";
console.log(frase1)
console.log(frase2)

 //Template string
var titulos = 10;
var frase3 = `O Palmeiras tem ${titulos + 1} titulos brasileiros`;
console.log(frase3)

/* Exercício
Declare uma variável contendo uma string

Declare uma variável contendo um número dentro de uma string

Declare uma variável com a sua idade

Declare duas variáveis, uma com seu nome e outra com seu sobrenome, e some ambas

Coloque a seguinte frase em uma variável: It's Time

Verifique o tipo da variável que contém o seu nome
*/

var ex1 = 'Eu sou uma string';
var ex2 = 'Exercício numero ' + 2 + ' da tarefa';
var ex3 = 20;
var ex4 = 'Brenno',
    ex41 = 'Cavalcante',
    ex42 = ex4 + ' ' + ex41;
var ex5 = "It's Time";
var ex6 = typeof ex1;

console.log(`${ex1} | ${ex2} | ${ex3} | ${ex4} | ${ex41} | ${ex42} | ${ex5} | ${ex6} `)
