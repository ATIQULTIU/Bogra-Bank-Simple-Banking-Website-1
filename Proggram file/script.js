let balance = 0;

function deposit() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        addHistory("Deposit", amount);
        updateBalance();
    }
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        addHistory("Withdraw", amount);
        updateBalance();
    } else {
        alert("Insufficient Balance!");
    }
}

function checkDeposit() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        addHistory("Check Deposit", amount);
        updateBalance();
    }
}

function updateBalance() {
    document.getElementById("balance").innerText = balance;
    document.getElementById("amount").value = "";
}

function addHistory(type, amount) {
    let history = document.getElementById("history");
    let li = document.createElement("li");
    li.innerText = `${type}: ৳ ${amount}`;
    history.appendChild(li);
}
