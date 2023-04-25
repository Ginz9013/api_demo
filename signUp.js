const signUpBtn = document.querySelector("#signUp");

// Input
const account = document.querySelector("#account");
const pwd = document.querySelector("#pwd");


signUpBtn.addEventListener("click", () => {
    signUp();
})

function signUp() {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    let body = {
        account: account.value,
        password: pwd.value,
    }
    
    fetch("http://localhost:8080/add_account", {
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
            alert("申請成功");
            window.location.href = "index.html";
        }
      })
      .catch(error => console.error(error));
}