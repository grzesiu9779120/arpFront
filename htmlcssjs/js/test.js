import fetch from 'node-fetch';

/*

// https://jsonplaceholder.typicode.com/photos/1
// https://jsonplaceholder.typicode.com/photos/2
// https://jsonplaceholder.typicode.com/photos/3

// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/2
// https://jsonplaceholder.typicode.com/posts/3

// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/users/2
// https://jsonplaceholder.typicode.com/users/3

console.clear();

class User {
    constructor (user, seniority, recommendedEmployees){
        this.user = user;
        this.seniority = seniority;
        this.recommendedEmployees = recommendedEmployees;
    }

    getUser() {
        return this;
    }

    callToUser(){
        return `I make a phone call to the number: ${this.user.phone}`;
    }
}

let user1;

async function getUserFetch () {
    try{
        const respone = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!respone.ok){
            throw new Error(`HTTP error: ${respone.status}`);
        }

        const json = respone.json();
        return json;
    }
    catch(error){
        console.error(`Error: ${error}`);
    }
} 



//user1 = new User (resolve, "junior", 4);

const jsonPromise = getUserFetch();
jsonPromise.then((json) => console.log(json[0].username));


*/


// :, ;, -, ~, ), D
// [';]', ':[', ';*', ':$', ';-D'] => 1 emotka prawidłowa

// Napisz funkcję, która dla tablicy emotek policzy, ile z nich jest "akceptowalnych"


/*
const icon = [';]', ':[', ';*', ':$', ';-D'];

const checkIcon  = (iconArray) =>{
    const patern = [
        ";)",
        ":)",
        ";-)",
        ":-)",
        ";~)",
        ":~)",
        ";D",
        ":D",
        ";-D",
        ":-D",
        ";~D",
        ":~D"
      ];

    return iconArray.reduce((prev,curr) =>{
        if(patern.includes(curr)){
           return prev +=1;
        }
        return prev;
    },0)
}

console.log(checkIcon(icon));
*/


/*
const arr1 = [15,20,1,3,5,7,9,12];
const arr2 = [400,1,25,9,144,81,49,225];


const compareArrays = (a1,a2) =>{
    if(a1.length === a2.length){
        const newArr1 = a1.map(value => value*value).sort((a,b) => a -b);
        return newArr1.every((element,index) =>{
            return element === arr2.sort((a,b) => a - b)[index];
        })
    }
    return false
}

const check =  compareArrays(arr1,arr2);

console.log(check);
*/


// 5. Autobus jezdzi po miescie
// Pasazerowie wsiadaja i wysiadaja, na wejsciu mamy tablice zlozona z tablic 2 elementowych
// indeks 0 to pasazerowie ktorzy wsiadaja, indeks 1 to pasazerowie ktorzy wysiadaja

// [[10,0],[3,5],[5,8]] => 5 pasazerow
const array1 = [[10,0],[3,5],[5,8]]

const check = (arr) =>{
    return arr.reduce((prev, acc) =>{
        return prev = prev + acc[0] - acc[1]; 
    },0)
}

console.log(check(array1));


/*

const getData = async (path, id = "", onSuccessCallback, onErrorCallback) => {
  // fetch(`${path}/${id}`)
  //   .then((resolve) => resolve.json())
  //   .then((response) => {
  //     // console.log('pobrano prawidlowo!')
  //     if (onSuccessCallback) {
  //       // console.log(onSuccessCallback);
  //       onSuccessCallback(response);
  //     }
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  const data = await fetch(`${path}/${id}`);
  const response = await data.json();
  return response;
};

// getData("https://jsonplaceholder.typicode.com/photos", 5);

const getApiData = async () => {
  try {
    const data = await getData(
      "https://jsonplaceholder.typicode.com/photos/",
      5,
      createNewPhotoObject
    );
    console.log(data);
    photos4 = data;
  } catch (err) {
    console.error(err);
  } finally {
  }
};
*/