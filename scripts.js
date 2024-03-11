document.addEventListener("DOMContentLoaded", function () {

    function easyRound(money) {
        return Math.ceil(money* 100) / 100;
    };

    document.getElementById("incomeInput").addEventListener("change", function (e) {
        let income = e.target.value
        document.getElementById('monthlyIncome').innerText = easyRound(income / 12);
        document.getElementById('monthlyIncome').value = easyRound(income / 12);
        document.getElementById(`fedTax`).innerText = easyRound(income * 0.12);
        document.getElementById(`stateTax`).innerHTML = easyRound(income * 0.07);
        document.getElementById(`fedTax`).value = easyRound(income * 0.12);
        document.getElementById(`stateTax`).value = easyRound(income * 0.07);
    });
    document.querySelector('#career').addEventListener("change", (e) => {
        // console.log(e.target.value);
        document.getElementById('incomeInput').value = e.target.value;
    })
    let inputs = document.querySelectorAll('div input');
    for (let input of inputs) {
        input.addEventListener('change', calcTotal)
    }
});

function calcTotal() {
    let balance = document.getElementById('monthlyIncome').value;
    let inputs = document.querySelectorAll('div input');
    console.log(inputs)
    balance *= .12;
    balance = document.getElementById('monthlyIncome').value * .07;
    for (let i = 1; i < inputs.length; i++) {
        balance = Math.ceil((balance - inputs[i].value)* 100) / 100;
    }
    console.log(balance);
    document.getElementById(`endTotal`).innerHTML = ` <p><strong>Amount Left:</strong> $${balance}</p>`;
}