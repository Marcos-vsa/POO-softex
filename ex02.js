class Animal{
    falar(){

    }
}

class Cachorro extends Animal{
    falar(){
        console.log("Au au ")
    }
}

const cachorro1 = new Cachorro();
cachorro1.falar();

class Gato extends Animal{
    falar(){
        console.log("Meow");
    }
}
const gato1 = new Gato();
gato1.falar();

