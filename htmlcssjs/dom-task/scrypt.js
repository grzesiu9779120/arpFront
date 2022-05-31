const appState = [];
const CAT_URL = "https://cataas.com/cat/gif?json=true";

class Cat{
    constructor(id,created_at, tags, url){
        this.id = id;
        this.created_at =created_at;
        this.tags = tags;
        this.url = url;
    }
}

const onSuccessCalback = (cat) =>{
    const {id,created_at, tags, url} = cat;
    appState.push(new Cat(id,created_at, tags, url));
}

const onErrorCallback = (error) =>{
    console.error(error);
}

const getCat = async (url,onSuccessCalback,onErrorCallback) =>{
    try{
      const request = await fetch(url);
      const catGif = await request.json();
      onSuccessCalback(catGif);
    }
    catch(e){
        onErrorCallback(e);
    }
}

const createElement = async (type, classArray, parrent) => {
    const parrentElement = document.getElementsByTagName(parrent);
    const newElement = document.createElement(type);
    newElement.classList.add(...classArray);
    await getCat(CAT_URL,onSuccessCalback,onErrorCallback);
    newElement.src = `https://cataas.com${appState[appState.length -1].url}`;
    newElement.innerHTML = "?"
    parrentElement[0].appendChild(newElement);
};

const mainElement = document.createElement("div");
mainElement.classList.add("mainConteiner");
document.body.appendChild(mainElement);

document.getElementById("addingButton").addEventListener("click", () => {createElement("img",["catGif"], "div")});