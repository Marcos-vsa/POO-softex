class Animal{
    cosntructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`${this.nome} fez algum barulho.`)
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }
    falar(){
        console.log(`${this.nome} latiu !`)
    }
}

const cachorro1 = new Cachorro("Pitocas");
cachorro1.falar();

class Gato extends Animal{
    constructor(nome){
        super(nome);
    }
    falar(){
        console.log(`${this.nome} Miou!`);
    }
}
const gato1 = new Gato("Snowbell");
gato1.falar();

