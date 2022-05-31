

const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


// Przy pierwszym wyświetleniu ładujemy content z API_URL
// Przy wyszukiwaniu filmów ładujemy content z SEARCH_API

// Layout - flex lub grid
// Wyświetlamy siatkę zdjęć (plakatów) filmowych
// Po kliku - pokazujemy summary danego filmu
// Double click usuwa element z DOM
// Dodatkowo: obsługa stronicowania + zapisywanie ulubionych filmów w localstorage

const getDateFetch =async (url) =>{
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

const getDateFromMovesApi =async  () =>{
    const movesData = await getDateFetch(API_URL);
    const movesList = movesData.results;

    movesList.map((move) =>{
        console.log(move);
        createFilmElement(move)
    })
    
}

const createElementDOM = (type, classList) =>{
    const elementDOM = document.createElement(type);
    if(classList) elementDOM.classList.add(...classList);
    return elementDOM;
}

const createFilmElement = (filmData) =>{
    const moveContainerFront = createElementDOM("div", ["move__container__front"]);
    const moveContainerBack = createElementDOM("div", ["move__container__back"]);
    const imgElement1 = document.createElement("img");
    imgElement1.src = `${IMG_URL}${filmData.backdrop_path}`;

    const imgElement2 = document.createElement("img");
    imgElement2.src = `${IMG_URL}${filmData.backdrop_path}`;


    const moveInfoContainer = createElementDOM("div", ["move__info__container"]);
    const moveInfo = createElementDOM("div", ["move__info"]);
    moveInfo.innerHTML = `<h3>${filmData.title}</h3>`;

    const ratingElement = createElementDOM("span", ["rating__container"]);
    ratingElement.innerHTML = filmData.vote_average;
    let ratingClass = "red";
    if(parseFloat(filmData.vote_average) >= 8) ratingClass = "green";
    if(parseFloat(filmData.vote_average) >= 5) ratingClass = "orange";
    ratingElement.classList.add(ratingClass);

    const overviewElement = createElementDOM("div", ["overview__container"]);
    overviewElement.innerHTML = `<h3>Overview</h3><span>${filmData.overview}</span>`;

    moveInfo.appendChild(ratingElement);
    moveInfoContainer.appendChild(moveInfo);


    moveContainerFront.appendChild(imgElement1);

    moveContainerBack.appendChild(imgElement2);
    moveContainerBack.appendChild(overviewElement);

    const flipMoveContainer = createElementDOM("div", ["move__container__flip"]);
    const mainMoveContainer = createElementDOM("div", ["move__container__main"]);
    flipMoveContainer.addEventListener("click", () => {
        mainMoveContainer.classList.toggle("visable");
    })

    flipMoveContainer.addEventListener("dblclick", () => {
        flipMoveContainer.classList.add("slowRemove");
        setTimeout(()=>{flipMoveContainer.remove();}, 1000)
    })
    mainMoveContainer.appendChild(moveContainerFront);
    mainMoveContainer.appendChild(moveContainerBack);
    flipMoveContainer.appendChild(mainMoveContainer);
    flipMoveContainer.appendChild(moveInfoContainer.cloneNode(true));

    const movesContainer =  document.getElementsByClassName("moves__container")[0];
    movesContainer.appendChild(flipMoveContainer);
}

getDateFromMovesApi();
