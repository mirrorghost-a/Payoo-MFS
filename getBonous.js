let baccount = document.getElementById("BCN")
let bwarning = document.getElementById("warning-log")
document.getElementById("BCB").addEventListener('click',function(event){
    event.preventDefault()
    if(baccount.value === ""){
        baccount.classList.add("border-red-400","border-2")
    }
    else{
        taccount.classList.remove("border-red-400","border-2")
        let currentBalance = document.getElementById("userBalance").innerText
        let newBalance = parseInt(currentBalance) + 100
        document.getElementById("userBalance").innerText = newBalance.toString()
        bwarning.classList.remove("hidden")
        baccount.value = ''
    }
    
})