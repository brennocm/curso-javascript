function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(5));
console.log(areaQuadrado(10));
console.log(areaQuadrado(8));

function msg(){
  console.log("Função Ativa!!")
}

msg();

function pi(){
  return 3.14;
}

var total = 2 * pi();

console.log(pi);
console.log(total);

//Ao criar uma função, pode-se definir PARÂMETROS
//Ao executar uma função, pode-se definir ARGUMENTOS

function imcCalculo(peso, altura){
  var imc = peso / (altura ** 2); //Altura ao quadrado
  return imc
}

console.log(imcCalculo(70, 1.70));

function AutorFavorito(nome){
  if(nome === 'Liev Tolstói'){
    return 'Você gosta do Tolstoi, leia Guerra e Paz';
  } else if(nome === 'Fiódor Dostoiévski'){
      return 'Você gosta do Dostoiévski, leia Crime e Castigo';
  } else{
    return 'Você não gosta dos mestres russos =('
  }
}

console.log(AutorFavorito('Liev Tolstói'));
console.log(AutorFavorito('Fiódor Dostoiévski'));
console.log(AutorFavorito('Machado de Assis'));

addEventListener('click', function(){
  console.log('oi');
})

function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'Informe a sua idade!';
  } else if (idade >= 60){
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('abc'));
console.log(terceiraIdade(8));
console.log(terceiraIdade(80));

function faltaVisitar(paisesVisitados){
  totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;

}

console.log(faltaVisitar(3))

/* Exercícios:
 Crie uma função para verificar se um valor é Truthy

 Crie uma função matemática que retorne o perímetro de um quadrado
 lembrando: perímetro é a soma dos quatro lados do quadrado

 Crie uma função que retorne o seu nome completo
 ela deve possuir os parâmetros: nome e sobrenome

 Crie uma função que verifica se um número é par

 Crie uma função que retorne o tipo de
 dado do argumento passado nela (typeof)

 addEventListener é uma função nativa do JavaScript
 o primeiro parâmetro é o evento que ocorre e o segundo o Callback
 utilize essa função para mostrar no console o seu nome completo
 quando o evento 'scroll' ocorrer.

 Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
*/

function verificaTruthy(dado){
  return !!dado;
}

console.log(verificaTruthy(23))
console.log(verificaTruthy())

// -

function perimetro(ladoQudrado){
  return ladoQudrado * 4;
}

console.log(perimetro(5));

// -

function nomeCompleto(nome, sobrenome){
  return `Meu nome é ${nome} ${sobrenome}, e estou estudando programação utilizando Javascript`
}

console.log(nomeCompleto('Brenno', 'Cavalcante Miranda'))

// -

function verificaPar(numero){
  resto = numero % 2;
  if (resto === 0){
    return 'O número analisado é par';
  } else {
    return 'O número analisado é impar'
  }
}

console.log(verificaPar(4));
console.log(verificaPar(1));

function tipo(valor){
  return typeof valor;
}

console.log(tipo('9'))
console.log(tipo(9))
console.log(tipo(true))