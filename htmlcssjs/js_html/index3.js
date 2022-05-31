import { faker } from '@faker-js/faker';

class Person{
    constructor(name, picked){
        this.name = name;
        this.picked = picked;
    }

    get(){
        return this;
    }

    setName(name){
        this.name = name;
    }

    setPicked(picked){
        this.picked = picked;
    }
}

let arrayOfPeros = [];


for (let i = 0; i < 10; i++){
    arrayOfPeros.push(new Person(faker.name.findName(), false));
}

const counter = new Array(10);
counter.fill(0);


const getRandomPersonName = (persons) => {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomPerson = persons[randomNumber];
    counter[randomNumber]++;

    if(counter[randomNumber] === counter.filter((a,b) => a > b)[0]){
        
    }
}

