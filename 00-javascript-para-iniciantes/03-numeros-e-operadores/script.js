var idade = 20,
    gols = 10000,
    pi = 3.14,
    exp = 2e10;

console.log(idade);
console.log(typeof idade);

console.log(exp);
console.log(typeof exp);

var soma = 10 + 100,
    substracao = 100 - 5e1,
    multiplicacao = 18 * 2.
    divisao = 100 / 8,
    expoente = 2 ** 4,
    modulo = 14 % 5;

console.log(soma);
console.log(substracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);

var soma1 = '100' + 50,
    substracao1 = '100' - 50,
    multiplicacao1 = '100' * '3',
    divisao = 'Comprei 10' / 2;

console.log(soma1);
console.log(substracao1);
console.log(multiplicacao1);
//console.log(divisao1)
console.log(isNaN(soma1));

var total1 = 20 + 5 * 2,
    total2 = (20 + 8) * 2,
    total3 = 20 / 2 * 5,
    total4 = 10 * 10 * 2 / (8 + 2);

console.log(total1);
console.log(total2);
console.log(total4);
console.log(total4);

var incremento = 5,
    incremento2 = 10;

console.log(++incremento);
console.log(incremento2--);
console.log(incremento2)

var frase =  "Isso é um teste";
console.log(+frase);

var n = '20';
console.log(n + 5)
console.log(+n + 5)

var possuiFaculdade = false;
console.log(+possuiFaculdade);

/* Exercícios
Qual o resultado da seguinte expressão? 
var total = 10 + 5 * 2 / 2 + 20

Crie duas expressões que retornem NaN

Somar a string '200' com o número 50 e retornar 250

Incremente o número 5 e retorne o valor incrementado

Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = peso / 2;
*/

var ex1 = 35;

//var ex2 = 'God OF War ' + 210 + 'Ragnarok' / 2
//var ex21 = 'Testando' * 5;

var ex3 = '200';
console.log(+ex3 + 50);

var ex4 = 5;
ex4++;
console.log(ex4)

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = peso / 2;
console.log(peso)
console.log(+pesoPorDois)