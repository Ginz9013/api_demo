// Person Title
const personTitle = document.querySelector("#personTitle");

// Input
const amount = document.querySelector("#amount");

// List
const showAccount = document.querySelector(".showAccount");
const showAmount = document.querySelector(".showAmount");
const showChangeAmount = document.querySelector(".showChangeAmount");
const message = document.querySelector(".message");


// Button
const depositBtn = document.querySelector("#deposit");
const withdrawBtn = document.querySelector("#withdraw");

let body = {
    account: "",
    password: "",
    amount: 0
} 

body.account = localStorage.getItem("account");
body.password = localStorage.getItem("password");
body.amount = localStorage.getItem("amount");
personTitle.innerText = body.account;
showAccount.innerText = body.account;
showAmount.innerHTML = body.amount;


console.log(body);

withdrawBtn.addEventListener("click", () => {
    body.amount = amount.value;

    console.log(body);

    withdraw();
    alert("取款成功");
})

depositBtn.addEventListener("click", () => {

    body.amount = amount.value;

    deposit();
    alert("存款成功");
})

function deposit() {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    fetch("http://localhost:8080/deposit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        if(data.success) {
            showChangeAmount.innerText = data.changeAmount;
            showAmount.innerText = data.amount;
            message.innerText = data.msg;
        }
        
      })
      .catch(error => console.error(error));
}

function withdraw() {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    fetch("http://localhost:8080/withdraw", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        if(data.success) {
            showChangeAmount.innerText = data.changeAmount;
            showAmount.innerText = data.amount;
            message.innerText = data.msg;
        }
      })
      .catch(error => console.error(error));
}