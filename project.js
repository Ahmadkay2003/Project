// let user = prompt("What is your name")
//     alert(Welcome ${user})
// let name = prompt("What is your name")
// if (name== "Ahmad"){
//     alert(Welcome Ahmad my Gee!)
// }
// else if(name=="Quadri"){
//     alert("Agba dev ni Quadri")
// }
// else if (name=="Elizabeth"){
//     alert("Obleeeeeee")
// }

// let j=20
// while(j<200){
//     console.log(Hello No ${j})
//     j++
// }
// function js(x){
//     for(let i=1; i<x;i++)
//         console.log(Hello world ${i})
// }
// js(30)
// function num(a,b,c){
//     for(let i=a;i<b;i+=c){
//         console.log(i)
//     }
// }
// num(10,20,3)
// let board = document.getElementById("ole")
// console.log(ole)
// board.innerText="Good Morning"
// board.style.color="blue"
// board.style.backgroundColor="yellow"
// board.style.textAlign="center"
// board.style.font="30px"


let body = document.body
let btn = document.getElementById("ole")
let on = true
function change (){
if (on){
    body.style.backgroundColor="black"
    body.style.color="white"
    on= false
    btn.innerText="Down nepa"
}
else{
    body.style.backgroundColor="white"
    body.style.color="black"
    on=true
    btn.innerText="Up nepa"
}
}
btn.addEventListener("click",change)


// let b = ["Tolu", "Ola", "Titi"]
// for (let i = 0; i<b.length; i++)
//     console.log(b)