let defult = document.getElementById("defult")
let main = document.getElementById("money")
let cashout = document.getElementById("cashout")
let tmoney = document.getElementById("tmoney")
let coupon = document.getElementById("coupon")
function diffault(){
    defult.classList.add('hidden')
    main.classList.add('hidden')
    cashout.classList.add('hidden')
    tmoney.classList.add('hidden')
    coupon.classList.add('hidden')
}
document.getElementById("logout").addEventListener('click', function(){
    window.location.assign("index.html")
})
document.getElementById("userBalance").innerText = userInfo[currectUser].balance
document.getElementById("option").addEventListener('click',function(event){
    // event.preventDefault()
    diffault()
    if(event.target.innerText === "Add Money"){
        main.classList.remove('hidden')
    }
    else if(event.target.innerText === "Cashout"){
        cashout.classList.remove('hidden')
    }
    else if(event.target.innerText === "Transfer Money"){
        tmoney.classList.remove('hidden')
    }
    else if(event.target.innerText === "Get Bonus"){
        coupon.classList.remove('hidden')
    }
    
})