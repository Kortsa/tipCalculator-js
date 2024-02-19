const billAmount = document.getElementById("billAmount");

const customTipAmount = document.getElementById("customTipAmount");

const splitCount = document.getElementById("splitCount")

const submitBtn = document.getElementById("calculate");

const totalAmount = document.getElementById("totalAmount")
const tipAmount = document.getElementById("tipAmount")
const amountPerHead = document.getElementById("amountPerPerson")

function submit() {
    const Bill = parseFloat(billAmount.value);
    const Tip = parseFloat(customTipAmount.value);
    const numberofPeople = parseFloat(splitCount.value);

    if (!Bill || !Tip || !numberofPeople) {
        alert('some fields are empty')
    } 
    else 
    {

        const TotalBill = parseFloat(Bill + Tip);
        const amountPerPerson = parseFloat(TotalBill / numberofPeople);

        totalAmount.innerHTML = `The total Amount is: $${TotalBill}`
        tipAmount.innerHTML = `Tip: $${Tip}`;
        amountPerHead.innerHTML = `Amount Per Person: $${amountPerPerson}`
    }
    reset()
}

function reset() {
    billAmount.value = ""
    customTipAmount.value = ""
    splitCount.value = ""
}


function toggleDivVisibility() {
    const serviceRatingRadioButton = document.getElementById("serviceRating");
    const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

    if (serviceRatingRadioButton.checked) {
        serviceRatingInputDiv.style.display = "block";
    } else {
        serviceRatingInputDiv.style.display = "none";
    }
}

function customToggle() {
    const customRatingBtn = document.getElementById("customTip")
    const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

    if (customRatingBtn.checked) {
        serviceRatingInputDiv.style.display = "none"

    }
}
