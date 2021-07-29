let input = document.querySelector(".input-text")


let generatePassword = function(){
    let passwordLenght = 12
let password=""
    let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(i = 0 ; i<= passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * char.length)
        password = password+ char.substring(randomNumber , randomNumber+1)
    }
    input.value= password
}


let copyPassword = function(){
    input.select()
    document.execCommand("copy")
}
