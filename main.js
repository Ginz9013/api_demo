// Input
const account = document.querySelector("#account");
const pwd = document.querySelector("#pwd");

// Button
const loginBtn = document.querySelector("#login");


loginBtn.addEventListener("click", () => {
    let body = {
        account: "",
        password: "",
    }
    body.account = account.value;
    body.password = pwd.value;

    console.log(body);

    getAccount(body);
})

function getAccount(body) {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    
    fetch("http://localhost:8080/get_account", {
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
            localStorage.setItem("account", data.account);
            localStorage.setItem("password", data.password);
            localStorage.setItem("amount", data.amount);

            alert("登入成功");
            window.location.href = "person.html";
            console.log(data)
        } else {
          alert("帳號密碼錯誤")
        }
      })
      .catch(error => console.error(error));
}