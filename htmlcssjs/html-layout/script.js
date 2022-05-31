const domElements ={
    formContainer: document.querySelector('form')
}

const inputTypesToCheckValue = [
    "date",
    "text",
    "select-one",
    "email",
    "number"
];

const addChildToShowValidationResult =(element) =>{
    const newChildElement = document.createElement("div");
    newChildElement.classList.add("validationResultField");
    newChildElement.innerHTML ="&#9989"
    element.afteraddOnFocusEventListener = (element) => {
    }
}

const formInputFieldnames = [
    "firstName",
    "lastName",
    "email",
    "destination",
    "dateFrom",
    "dateTo",
    "numberOfPeople",
    "carRent",
    "airportTransport",
    "withInsurance",
    "insurance",
    "withoutInsurance",
    "file",
  ];

const validateFormElements = (element) => {
    //sprawdzamy wartość inputa
    //w przypadku pustej wartości dodajemy klasę "emptyInputError"
    //w przeciwnym przypadku usuwamy  
    //if(element.)


}

const onFormSubmitCallback = (event) =>{
    event.preventDefault();
    
}


domElements.formContainer.addEventListener('submit', onFormSubmitCallback);

const formElements = Array.from(domElements.formContainer.elements);

    for(const e of formElements){
        //console.log(e.type);
        if (e.type === "text") {
            addOnFocusEventListener(e, addChildToShowValidationResult(e));
        }
    }