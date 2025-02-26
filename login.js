let mobileNumber = ["2", "34", "54", "32", "56", "434"]
let pin = [ "2", "34", "54", "32", "56", "434" ]
document.getElementById("login_btn").addEventListener("click", function(event){
event.preventDefault()
    let usrnumber = document.getElementById("usernumber")
    let usrpin = document.getElementById("usrpin")
    let warning = document.getElementById("warning-log")
    if(mobileNumber.includes(usrnumber.value) ||pin.includes(usrpin.value)){
        warning.classList.add('hidden')
        usrnumber.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        usrpin.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        window.location.assign("welcome.html")
    }
    else if(!mobileNumber.includes(usrnumber.value) || !pin.includes(usrpin.value)){
        warning.classList.remove('hidden')
        usrnumber.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        usrpin.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
    }
    usrnumber.value = ''
    usrpin.value = ''
}) 