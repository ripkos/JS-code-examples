function validateForm () {
    // pola
    const nameInput = document.getElementById('name');
    const moneyInput = document.getElementById('money');
    // errory
    const errorName = document.getElementById('errorName');
    const errorMoney = document.getElementById('errorMoney');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([nameInput,moneyInput],[errorName,errorMoney],errorsSummary);
    let valid = true;
    //nazwa
    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    }
    else if (!checkTextLengthRange(nameInput.value,2,60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków"
    }

    //kwota
    if (!checkRequired(moneyInput.value)) {
        valid = false;
        moneyInput.classList.add("error-input");
        errorMoney.innerText = "Pole jest wymagane";
    }
    else if (!checkNumber(moneyInput.value)) {
        valid = false;
        moneyInput.classList.add("error-input");
        errorMoney.innerText = "Pole powinno być liczbą"
    }
    else if (!checkNumberRange(moneyInput.value,0.01,99999)) {
        valid = false;
        moneyInput.classList.add("error-input");
        errorMoney.innerText = "Pole powinno mieć wartość od 0.01 do 99999"
    }


    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera blędy";
    }
    return valid;
}