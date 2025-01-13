let body= document.body
let h2= document.querySelector("h2")
let p1= document.querySelector(".greet")
let h4= document.getElementsByTagName("h4")[0]
let p2= document.getElementById("code")
let button= document.querySelector("button")
let button2= document.getElementById("reset")

function yam(){
    h4.innerText= "Congratulations!!!"
    p1.innerText= "Hope to see you again"
    p2.style.visibility= "visible"
    button.innerText= "You Won"
    button.style.backgroundColor= "yellow"
    body.style.backgroundColor= "red"
    button.style.border= "2px solid black"
    button.style.color= "black"
}

function cassava(){
    h4.innerText= "Try your luck"
    p1.innerText= "We are happy to see you"
    p2.style.visibility= "hidden"
    button.innerText= "Play"
    button.style.backgroundColor= "black"
    body.style.backgroundColor= "lightBlue"
    button.style.border= "2px solid blue"
    button.style.color= "white"
}

button.addEventListener("click", yam)
button2.addEventListener("click", cassava)














