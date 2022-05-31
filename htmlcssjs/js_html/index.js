import fetch from 'node-fetch';

const request = new Promise((resolve,reject) =>{
    resolve("ok");
})

class Category{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

}

class Pet{
    constructor(id,category,name,photoUrls,tags,status){
        this.id = id;
        this.category = category;
        this.name = name;
        this.photoUYrls = photoUrls;
        this.tags = tags;
        this.status = status;
    }
}

class Tag{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}

class Order{
    constructor(id,petId,quantity,shipDate,status){
        this.id = id;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
    }
}

class User{
    constructor(id,username,firstName,lastName,email,password,phone,userStatus){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.userStatus = userStatus;
    }
}



const API_URL =  'https://petstore.swagger.io/v2';
const PET_ENDPOINT = `${API_URL}/pet`;
const STORE_ENDPOINT = `${API_URL}/store`;
const USER_ENDPOINT = `${API_URL}/user`;

////////metoda promise

const getEndpointByPromise = ((url,onSuccessCalback,onErrorCallback) =>{
    return fetch(url)
    .then(response => response.json())
    .then((data) =>{
        onSuccessCalback(data);
    })
    .catch((err) =>{
        onErrorCallback(err);
    })
})

const onSuccessCalback = (data) => {
if (data.type === "error") {
    console.error(data.message);
}
else{
    const {id, category, name, photoUrls, tags, status} = data;
    const newTags = tags.map((tag) =>{
        const {id, name} = tag;
        return new Tag(id, name);
    })
    const pet1 = new Pet(id, category, name, photoUrls, newTags, status);
    console.log(pet1);
}
};
const onErrorCallback = (err) => console.log(err);



//////////metoda async, awai

const getEndpointByAsync = async (url,onSuccessCalback,onErrorCallback) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(onSuccessCalback){
            onSuccessCalback(data);
        }
    }
    catch(e){
        if(onErrorCallback){
            onErrorCallback(e);
        }
    }
};


//getEndpointByPromise(`${PET_ENDPOINT}/1`,onSuccessCalback,onErrorCallback);
//getEndpointByAsync(`${PET_ENDPOINT}/1`,onSuccessCalback,onErrorCallback);

const sendDataToApi = async (apiEndpoint, method, body, onSuccessCalback, onErrorCallback) =>{
    if(method === 'POST' || method === 'PUT'){
        try{
            console.log(body);
            const request = await fetch(apiEndpoint,{
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify(body)
            });
            const response = await request.json();
            onSuccessCalback(response);
        } catch (err){
            onErrorCallback(err)
        }
        
    }else{
        console.log("other method");
    }
}

const petDataToSend = {
    id: 'a',
    category: {
        id: 0,
        name: "string"
    },
    name: "doggie",
    photoUrls: ["string"],
    tags: [
        {
            id: 0,
            name: "string"
        }
    ],
    status: "available"
}

//sendDataToApi(PET_ENDPOINT, 'POST', petDataToSend, console.log, console.error);

const getOrderDetailsById = async (url,id,onSuccessCalback,onErrorCallback) =>{
    try{
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        if(onSuccessCalback){
            onSuccessCalback(data);
        }
    }
    catch(e){
        if(onErrorCallback){
            onErrorCallback(e);
        }
    }
};

//getOrderDetailsById(STORE_ENDPOINT, 1 , console.log, console.error);

/*
let loading = false;

new Promise((resolve, reject) =>{
    setTimeout(() => resolve("result"), 5000);
})
.then(result => {
    loading = !loading;
    console.log(loading);
    console.log(result)
})
.catch(error => console.error(error))
.finally(() =>{
    loading = !loading;
    console.log(loading);
})
*/

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }


