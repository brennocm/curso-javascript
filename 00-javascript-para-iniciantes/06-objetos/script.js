var pessoa = {
  nome: 'Brenno',
  idade: 20,
  profissao: 'Ethical Hacking',
  possuiFaculdade: false,
};

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(typeof pessoa);
console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado);

var futebol = {
  jogadores: 11,
  melhorTime(nomeTime){
    return `O ${nomeTime} é o melhor time do mundo`;
  },
  saldoJogadores(quantJogadores){
    return "Há " + this.jogadores * quantJogadores + ` Jogadores em campo quando jogam ${quantJogadores} times`;
  },
};

console.log(futebol.melhorTime('Palmeiras'));
console.log(futebol.saldoJogadores(3));
console.log(futebol);

console.log(Math.random());
console.log(Math.PI);
console.table(quadrado)
