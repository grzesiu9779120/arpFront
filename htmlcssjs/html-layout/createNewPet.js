/** Cwiczenie
 * API: https://petstore.swagger.io/#/pet/addPet
 * 1. Stworz obiekt z opisem pol formularza (id, typ, initialValue, isRequired, ...). Wszystkie inputy maja byc w <label for="xxxxx"></label>
 * 2. Iterujac po polach obiektu utworz formularz przy pomocy JS
 * 3. Na podstawie opisu pol z obiektu - waliduj formularz przy wysylce
 * 4. Dodaj do pola formularza error message, ktory pojawi sie w przypadku niespielnienia walidacji
 * 5. Wysylaj formularz dopiero, kiedy walidacja nie zwroci bledu
 * 
 * 
 * dodać powiązanie stanu z wartościami w elementach dom
 * walidajcja + wyświetlanie komunikatu o błędzie (dodać nowy span w przypadky błędnej walidacji)
 * tworzenie obiektu pet z wartości z formularza
 * wysłanie obiektu na serwer
 */

const appState = [];
const formElement = document.querySelector('form');

const lettersRegex = /^[a-zA-Z\s]*$/;
const numbersRegex = /^[0-9]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Pet {
    constructor(id,category, name, photoUrls, tags,status){
        this.id = id;
        this.idCategory = category[0];
        this.nameCategory = category[1];
        this.name = name;
        this.photoUrls = [photoUrls];
        this.tags = [...tags];
        this.status = status;
    }
}

class MyInputElement{
    constructor(labelValue, nameElement, type, classList, validationType, multiElement, placeholder, value,errorMessage){
        this.labelValue = labelValue,
        this.nameElement = nameElement,
        this.type = type,
        this.classList = classList,
        this.validationType = validationType,
        this.multiElement = multiElement,
        this.value = value,
        this.errorMessage = errorMessage,
        this.placeholder = placeholder
    }

    validation(){
        const validationType = this.validationType;
        if(validationType === "letters") {
            this.validationResult = lettersRegex.test(this.value);
            this.validationResult ? this.errorMessage = "Nieprawidłowa wartość, akceptowane są tylko litery" : this.errorMessage = "";
        }
        if(validationType === "numbers") {
            this.validationResult = numbersRegex.test(this.value)
            this.validationResult ? this.errorMessage = "Nieprawidłowa wartość, akceptowane są tylko liczby": this.errorMessage = "";
        }
        if(validationType === "email"){
            this.validationResult = numbersRegex.test(this.value)
            this.validationResult ? this.errorMessage = "Nieprawidłowy adres email": this.errorMessage = "";
        }
        else{
            this.validationResult = false;
        }

    }
}

class MySelectElement{

    constructor(labelValue, nameElement, optionsArray, classList, value){
        this.labelValue = labelValue,
        this.nameElement = nameElement,
        this.optionsArray = optionsArray,
        this.classList = classList;
        this.value = value
    }
}


const addInputElement = (labelValue, nameElement, type, classList, validationType, multiElement ,placeholder) =>{
    
    const inputElementState = new MyInputElement(labelValue, nameElement, type, classList, validationType, multiElement);
    appState.push(inputElementState);

    //create label 
    const labelElement = document.createElement("label");
    const spanElement = document.createElement("span");
    spanElement.innerHTML = labelValue;
    labelElement.appendChild(spanElement);
    labelElement.for = nameElement;

    //create input
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("name", nameElement);
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.classList.add(...classList);

    //multiElement
    if(multiElement){
        const divElement = document.createElement("div");
        divElement.classList.add("multiElementConteiner");
        divElement.appendChild(inputElement);

        const buttonElement = document.createElement("button");
        buttonElement.classList.add("multiElementButton");
        buttonElement.innerHTML  ="+";
        divElement.appendChild(buttonElement);

        //??
        labelElement.appendChild(divElement);

        buttonElement.addEventListener('click', (event) => {
            event.preventDefault();
            const childInputElement = document.createElement("input");
            childInputElement.setAttribute("type", type);
            childInputElement.classList.add(...classList);
            childInputElement.setAttribute("placeholder", placeholder);
            labelElement.appendChild(childInputElement);
        })
    }else labelElement.appendChild(inputElement);

    formElement.appendChild(labelElement);

}

const addSelectElement = (labelValue, nameElement, optionsArray ,classList) => {
    const selectElementState = new MySelectElement(labelValue, nameElement, optionsArray ,classList);
    appState.push(selectElementState);

    //create label 
    const labelElement = document.createElement("label");
    const spanElement = document.createElement("span");
    spanElement.innerHTML = labelValue;
    labelElement.appendChild(spanElement);
    labelElement.for = nameElement;

    //create select
    const selectElement = document.createElement("select");
    selectElement.setAttribute("name", nameElement);
    selectElement.classList.add(...classList);

    //create options
    for (const option of optionsArray) {
        const optionElement = document.createElement("option");
        optionElement.innerHTML = option[0];
        optionElement.setAttribute("value", option[1]);
        selectElement.appendChild(optionElement);
    }
    labelElement.appendChild(selectElement);
    formElement.appendChild(labelElement);

}


addInputElement("Imię", "petName", "text", ["inputElement"], "letters", false, "");
addSelectElement("Kategoria", "petCategory", [["Cats", "cats"],["Dogs", "dogs"]], ["selectElement"])
addInputElement("Url Zdjęcia", "petUrl", "text", ["inputElement"], "letters", true, "https://");
addInputElement("Tagi", "petTag", "text", ["inputElement"], "letters", true, "#sweet pet");
addSelectElement("Status", "petStatus", [["Available", "available"],["Pending", "pending"], ["Sold", "sold"]], ["selectElement"])


/*
const getAllFormValue = () => {
   const formChildrenElements =  Array.from(formElement.children).map(child =>{
       return child.lastChild;
   });
   formChildrenElements.pop();
   
   appState.map((element, index) => {
       element.fieldValue = formChildrenElements[index].value;
       console.log(element.fieldValue);
       element.validation();
       if(element.validationResult && element.fieldValue){
       formChildrenElements[index].classList.add("failedValidation")
       return
       }
   })
   
}
*/

const conectAllValue = () => {
    const formChildrenElements = Array.from(formElement.children).map(child =>{
        //return child.chldren;
        console.log(child);
    });


}


const buttonElement = document.createElement("button");
buttonElement.innerHTML = "Wyślij";
formElement.append(buttonElement);
conectAllValue();

/////////////////creat modal

const modalConteiner = document.createElement("div");
modalConteiner.classList.add("modalConteiner");
const modal = document.createElement("div");
modal.classList.add("modal");
const modalHeader = document.createElement("div");
modalHeader.classList.add("modal__header");
const headContent  = document.createElement("span");
headContent.innerHTML = "Newsletter";
const closingIcon = document.createElement("div");
closingIcon.classList.add("closingIcon")
closingIcon.innerHTML = "x";
modalHeader.appendChild(headContent);
modalHeader.appendChild(closingIcon);
const modalContent = document.createElement("div");
modalContent.classList.add("modal__content");
const contentText = document.createElement("span");
contentText.innerHTML = "Zapisz się do newslettera i otrzymaj 15% zniżki na pierwsze zakupy";
const contentInput = document.createElement("input");
contentInput.setAttribute("placeholder" , "jan.kowalski@wp.pl");
const contentButton = document.createElement("button");
contentButton.setAttribute("type", "submit")
contentButton.innerHTML = "Zapisz";
modalContent.appendChild(contentText);
modalContent.appendChild(contentInput);
modalContent.appendChild(contentButton);
const modalFooter = document.createElement("div");
modalFooter.classList.add("modal__footer");

modal.appendChild(modalHeader);
modal.appendChild(modalContent);
modal.appendChild(modalFooter);
modalConteiner.appendChild(modal);

document.body.appendChild(modalConteiner);

setTimeout(() =>{
    if(modalConteiner){
        modalConteiner.style.display = "flex"
    }
    
},1000)

modalConteiner.addEventListener("click", (event) =>{
    if( event.target.className === "closingIcon")
        modalConteiner.style.display = "none";
})

contentButton.addEventListener("click", () => {
    modalContent.innerHTML = "<p>Dziękujemy za zapisanie się do newslettera</p>";
    setTimeout(() =>{
        modalConteiner.style.display = "none"
    },5000)
})

document.addEventListener("keydown", (e)=>{
    if(e.code === 'Escape' && modalConteiner.style.display === "flex"){
        modalConteiner.style.display = "none"
    };
})