class Computer {
    constructor(brand, model, gpu, cost){
        this.brand = brand;
        this.model = model;
        this.gpu = gpu;
        this.cost =  cost;
    }

    getGpu () {
        return this.gpu;
    }

    getModel () {
        return this.model;
    }
}

const car1 = new Computer("Acer", "Nitro", {model: "NvidaRTX 3070", memoryType: "GDDR6X"}, 8500);

const randomNumbersArray = [];
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
let countNumber = 0;
let countReq = 0;


const interval1 =  setInterval(() => {
    randomNumbersArray.push(generateRandomNumber());
}, 5000)

const interval2 = setInterval(() => {
    randomNumbersArray.reduce((pV, cV)=>{
        countNumber = pV + cV;
    },0);
    countReq++;
},3000);

const promise = new Promise((res,rej)=>{
    if(countNumber >= 500 && countReq <= 10){
        clearInterval(interval1);
        clearInterval(interval2);
        res("Rejected");
    }
});

promise
    .then((res =>{
        console.log("ok");
    }))
    .catch((error) => console.error(error));