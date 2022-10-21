function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(5));
console.log(areaQuadrado(10));
console.log(areaQuadrado(7));

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

