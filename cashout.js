let uaccount = document.getElementById("cashoutN")
let uamount = document.getElementById("cashouta")
let uaccountPin = document.getElementById("cashoutP")
let uwarning = document.getElementById("warning-log")
document.getElementById("cashoutB").addEventListener('click',function(event){
    event.preventDefault()
    if(tamount.value ===""){
        tamount.classList.add("border-red-400","border-2")
    }
    else if(useraccount.includes(uaccount.value) && userpin.includes(uaccountPin.value)){
        let currentBalance = document.getElementById("userBalance").innerText
        let newBalance = parseInt(currentBalance) - parseInt(uamount.value)
        document.getElementById("userBalance").innerText = newBalance.toString()
        uaccount.value = ''
        uamount.value = ''
        uaccountPin.value = ''
        uaccount.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        uaccountPin.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        uwarning.classList.add("hidden")
        tamount.classList.remove("border-red-400","border-2")
    }
    else{
        tamount.classList.remove("border-red-400","border-2")
        uwarning.classList.remove("hidden")
        uaccount.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        uaccountPin.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
            uaccount.value = ''
            uaccountPin.value = ''
    }
    
})