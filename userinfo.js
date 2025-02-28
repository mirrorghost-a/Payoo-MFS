let userInfo = {
    "#ER534" :{uname: "Abu Talha" , balance: 4500, number: 2, pin: 2},
    "#ER535" :{uname: "F" , balance: 4500, number: 3, pin: 3},
    "#ER536" :{uname: "Nirob" , balance: 4500, number: 4, pin: 2},
    "#ER537" :{uname: "omor" , balance: 4500, number: 5, pin: 2}
}
let currectUser = "#ER537"
function findUser(inputNumber, inputPin){
    inputNumber = parseInt(inputNumber)
    inputPin = parseInt(inputPin)
    for(let user in userInfo)
        if(userInfo[user].number===inputNumber && userInfo[user].pin===inputPin){
            currectUser = user
            return true
        }
        else{
            return false
        }
}
function addUser(inputname, inputnumber, inputpin){
    for(let user in userInfo){
        if(userInfo[user].number===inputnumber)
            return false
        else{
            let random = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            userInfo["ER"+random] = {uname: inputname , balance: 0, number: inputnumber, pin: inputpin}

        }
    }
}