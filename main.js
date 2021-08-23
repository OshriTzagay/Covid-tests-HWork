let onInputInput = document.getElementById("onInputInput");
let onInputP = document.getElementById("onInputP");


// onInputInput.oninput = function (){
// onInputP.innerHTML = onInputInput.value;

// }
// ex1
// onload = function(){
// document.write("Loaded")
// }

// ex2

onInputInput.oninput =function (){
console.log(onInputInput.value.toUpperCase());
}

onInputInput.onchange = function (){
    onInputP.innerHTML += onInputInput.value.toLowerCase();
}

// ex3
let KefelInput =document.getElementById("KefelInput");
let KefelP =document.getElementById("KefelP");
let KefelPp =document.getElementById("KefelPp");


KefelInput.oninput = function (){
    KefelP.innerHTML = KefelInput.value*5;
}

KefelInput.onchange = function (){
    KefelPp.innerHTML=KefelInput.value*10;
}


// ex4

// ex5
let coloredBtn = document.getElementById("coloredBtn")
let coloredInput = document.getElementById("coloredInput")
let colorExP = document.getElementById("colorExP")

let counter = 0
coloredBtn.onclick=function (){
    let coloArray = ["red","blue","yellow"];
    // counter=    ;
    coloredBtn.style.backgroundColor =coloArray[counter]
    counter = counter +1;
    colorExP.innerHTML = Math.floor(Math.random()*1000)+counter

}

// ex6
let myDivon = document.getElementById("myDivon");
let imgBtnOne = document.getElementById("imgBtnOne");
let theImg = document.getElementById("theImg");
imgBtnOne.onclick = function (){
    theImg.src = "https://i.pinimg.com/originals/86/f0/aa/86f0aa12543a075bd85df7ac4d21a5ad.jpg"
}
let imgBtnTwo = document.getElementById("imgBtnTwo");
imgBtnTwo.onclick = function (){
    theImg.src = "https://i.pinimg.com/564x/ac/e8/13/ace8136e5318525edb67d658a1295ea8.jpg"
}
let imgBtnThree = document.getElementById("imgBtnThree");
imgBtnThree.onclick = function (){
    theImg.src = "https://i.pinimg.com/564x/ba/23/d4/ba23d45b8dd367c6cd51f478509ecfc3.jpg"
}   


let submitBtn = document.getElementById("submitBtn");
let firstNInput = document.getElementById("firstNInput")
let AgeInput = document.getElementById("AgeInput")
let phoneInput = document.getElementById("phoneInput")
let imgInput = document.getElementById("imgInput")
let form = document.getElementsByTagName("form")

// submitBtn.onclick = function (){
// newGuy = {name:firstNInput.value,Age:AgeInput.value,phone:phoneInput.value,IMG : imgInput.value,}

// console.log(newGuy);

// document.write(`the new Object is ${newGuy.name} Age is : ${newGuy.Age} , <br> ${newGuy.phone} here is <img src = "${imgInput.value}">`)}

submitBtn.onsubmit = function (refresh) {
    refresh.preventDefault()

    var userInfo = {

        name:firstNInput.value,
        age : AgeInput.value,
        phone:phoneInput.value,
        Img:imgInput.value,

    },
    
}