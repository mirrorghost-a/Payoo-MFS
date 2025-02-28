// import userInfo from "userinfo.js"
// import { findUser } from "userinfo.js"
let mobileNumber = ["2", "34", "54", "32", "56", "434"]
let pin = [ "2", "34", "54", "32", "56", "434"]
document.getElementById("login_btn").addEventListener("click", function(event){
event.preventDefault()
    // let findUser = findUser(usrnumber.value, userpin.value)
    let usrnumber = document.getElementById("usernumber")
    let usrpin = document.getElementById("usrpin")
    let warning = document.getElementById("warning-log")
    if(usrnumber.value ===""){
        usrnumber.classList.add("border-blue-400","border-2")
    }
    else if(usrpin.value ===""){
        usrpin.classList.add("border-blue-400","border-2")
    }
    else{
        if(findUser(usrnumber.value, usrpin.value)){
            warning.classList.add('hidden')
            usrnumber.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
            usrpin.classList.remove("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
            window.location.assign("main.html")
    }
    else if(!mobileNumber.includes(usrnumber.value) || !pin.includes(usrpin.value)){
        warning.classList.remove('hidden')
        usrnumber.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
        usrpin.classList.add("border-red-400","border-2",  "placeholder-red-700", "placeholder:font-semibold")
    }
    usrnumber.value = ''
    usrpin.value = ''
    }
}) 