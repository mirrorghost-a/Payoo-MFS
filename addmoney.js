let account = document.getElementById("accountNumber")
let amount = document.getElementById("amount")
let accountPin = document.getElementById("accountPin")
let useraccount = ["2", "34", "54", "32", "56", "434"]
let userpin = [ "2", "34", "54", "32", "56", "434"]
let selection = document.getElementById("selection")
let warning = document.getElementById("warning-log")
document.getElementById("addMoney").addEventListener('click',function(event){
    event.preventDefault()
    if(tamount.value ===""){
        tamount.classList.add("border-red-400","border-2")
    }
    else if(useraccount.includes(account.value) && userpin.includes(accountPin.value)){
        let currentBalance = document.getElementById("userBalance").innerText
        let newBalance =  parseInt(amount.value) + parseInt(currentBalance)
        document.getElementById("userBalance").innerText = newBalance.toString()
        selection.value = "Select a Bank"
        account.value = ''
        amount.value = ''
        accountPin.value = ''
        account.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        accountPin.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        warning.classList.add("hidden")
        tamount.classList.remove("border-red-400","border-2")
    }
    else{
        tamount.classList.remove("border-red-400","border-2")
        warning.classList.remove("hidden")
        account.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        accountPin.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
            account.value = ''
            accountPin.value = ''
    }
    
})