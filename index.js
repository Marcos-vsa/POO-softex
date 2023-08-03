const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ")
const idade = prompt("Digite seu idade: ")

class Pessoa {
  constructor(nome,idade){
    this.nome = nome 
    this.idade = idade
  }
  apresentar(){
    console.log(`Oi , meu nome é ${this.nome} e tenho ${this.idade} anos .`);
  }
}

const pessoa1 = new Pessoa(nome,idade);
pessoa1.apresentar()

class Aluno extends Pessoa{
  constructor(nome,idade,matricula){
  //super serve para herdar atributos da classe pai 
    super(nome,idade)
    this.matricula = matricula; 
  }
}

const aluno1 = new Aluno(nome,idade,232425)
console.log(aluno1)
