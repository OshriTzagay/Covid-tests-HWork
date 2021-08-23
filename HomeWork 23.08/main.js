let formButton = document.getElementById("formButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let yearInput = document.getElementById("yearInput");
let idInput = document.getElementById("idInput");
let cityInput = document.getElementById("cityInput");

TestedArray = [
  {
    id: 1,
    name:"oshri",
  },
  {
    id: 2,
    name:"amir",
  },
  {id :3,
name:"shimi",},
];


// ex1+ex2+ex3//

formButton.onclick = function () {
    
  newTester = {
    name: firstNameInput.value,
    lastName: lastNameInput.value,
    year: yearInput.value,
    id: idInput.value,
    city: cityInput.value,
  };
  var date = new Date();
  newTester.time = `${date.getHours()}:${date.getMinutes()}`;
  newTester.date = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  // console.log(newTester);

  TestedArray.push(newTester);
  console.log(TestedArray);

  for (let i = 0; i < TestedArray.length; i++) {
    if (newTester.id != TestedArray[i].id) {
      TestedArray.push(newTester)
      break;
    }
    alert ("already Got that ID");
    TestedArray.pop();
  }

  // ex4
  let myDiv = document.getElementById("myDiv");
  myDiv.innerHTML += `my first name:${firstNameInput.value}<br> my last name:${lastNameInput.value}<br> my birthYear:${yearInput.value}<br> my id:${idInput.value}<br> and City:${cityInput.value}<br><br><br>`;

  let myDivon = document.getElementById("myDivon");

  // firstNameInput.oninput=function(){

  // firstNameInput.value=firstNameInput.value.toUpperCase();
  // }
};
firstNameInput.oninput = function () {
  firstNameInput.value = firstNameInput.value.toUpperCase();
};
lastNameInput.oninput = function () {
  lastNameInput.value = lastNameInput.value.toUpperCase();
};
yearInput.oninput = function () {
 yearInput.value = yearInput.value.toUpperCase();
};
cityInput.oninput = function () {
  cityInput.value = cityInput.value.toUpperCase();
};
// ex 8

let SearchInput = document.getElementById("SearchInput");
let upperDiv = document.getElementById("upperDiv");
let theButton = document.getElementById("theButton")
let upperP = document.getElementById("upperP");
theButton.onclick= function(){
  for(let i = 0 ; i < TestedArray.length ; i ++){
    if (TestedArray[i].name == SearchInput.value){
        upperDiv.innerHTML =`the Name is :${TestedArray[i].name} <br> the ID${TestedArray[i].id}`
        break;
    }
   
  }
  if(upperDiv.innerHTML.length<2){
    upperDiv.innerHTML=`NOPE.`
}
}
theButton2.onclick= function(){
    for(let i = 0 ; i < TestedArray.length ; i ++){
      if (TestedArray[i].id == SearchInput.value){
          upperDiv.innerHTML =`the ID is :${TestedArray[i].id} <br> the Name is:${TestedArray[i].name}`
          
      }
    }
    if(upperDiv.innerHTML.length<2){
        upperDiv.innerHTML=`NOPE.`
    }
  }

// ex8

