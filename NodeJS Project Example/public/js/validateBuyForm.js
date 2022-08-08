function validateForm () {
    // pola
    const amountInput = document.getElementById('amount');
    const buyDateInput = document.getElementById('buyDate');
    const itemInput = document.getElementById('item');
    const buyerInput = document.getElementById('buyer');
    // errory
    const errorAmount = document.getElementById('errorAmount');
    const errorBuyDate = document.getElementById('errorBuyDate');
    const errorItem = document.getElementById('errorItem');
    const errorBuyer = document.getElementById('errorBuyer');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([amountInput,buyDateInput,itemInput, buyerInput],[errorAmount,errorBuyDate, errorItem, errorBuyer],errorsSummary);
    let valid = true;
    //amount
    if (!checkRequired(amountInput.value)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = "Pole jest wymagane";
    }
    else if (!checkNumber(amountInput.value)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = "Pole powinno być liczbą"
    }
    else if (!checkNumberRange(amountInput.value,1,999)) {
        valid = false;
        amountInput.classList.add("error-input");
        errorAmount.innerText = "Wartość powinna być od 1 do 999"
    }
    //data
    let nowDate = new Date(),
        month = '' + (nowDate.getMonth()+1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();
    if (month.length< 2) {
        month = '0' + month;
    }
    if (day.length<2) {
        day = '0' + day;
    }
    const nowString = [year,month,day].join('-');

    if (!checkRequired(buyDateInput.value)) {
        valid = false;
        buyDateInput.classList.add("error-input");
        errorBuyDate.innerText = "Pole jest wymagane";
    }
    else if (!checkDate(buyDateInput.value)) {
        valid = false;
        buyDateInput.classList.add("error-input");
        errorBuyDate.innerText = "Pole powinno być datą w formacie yy-mm-dd"
    }
    else if (!checkDateIfAfter(buyDateInput.value, nowString)) {
        valid = false;
        buyDateInput.classList.add("error-input");
        errorBuyDate.innerText = "Data nie może być z przeszlości"
    }

    //item
    if (!checkRequired(itemInput.value)) {
        valid = false;
        itemInput.classList.add("error-input");
        errorItem.innerText = "Pole jest wymagane";
    }
    //buyer
    if (!checkRequired(buyerInput.value)) {
        valid = false;
        buyerInput.classList.add("error-input");
        errorBuyer.innerText = "Pole jest wymagane";
    }



    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera blędy";
    }
    return valid;
}