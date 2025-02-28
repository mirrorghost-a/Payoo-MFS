let taccount = document.getElementById("TMN")
let tamount = document.getElementById("TMa")
let taccountPin = document.getElementById("TMP")
let twarning = document.getElementById("warning-log")
document.getElementById("TMB").addEventListener('click',function(event){
    event.preventDefault()
    if(tamount.value ===""){
        tamount.classList.add("border-red-400","border-2")
    }
    else if(useraccount.includes(taccount.value) && userpin.includes(taccountPin.value)){
        let currentBalance = document.getElementById("userBalance").innerText
        let newBalance = parseInt(currentBalance) - parseInt(tamount.value)
        document.getElementById("userBalance").innerText = newBalance.toString()
        taccount.value = ''
        tamount.value = ''
        taccountPin.value = ''
        taccount.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        taccountPin.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        twarning.classList.add("hidden")
        tamount.classList.remove("border-red-400","border-2")
    }
    else{
        twarning.classList.remove("hidden")
        tamount.classList.remove("border-red-400","border-2")
        taccount.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        taccountPin.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
            taccount.value = ''
            taccountPin.value = ''
    }
    
})