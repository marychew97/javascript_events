/*function go(name,age){
  alert("Hello"+name);
  alert(name+" is "+age);
}

go("Mary",20);

var name = prompt();
alert(name);*/
/*
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById('four');
var five = document.getElementById("five");

one.addEventListener("click",function(){
  console.log("hi");
  alert("hi");
});

two.addEventListener("mouseenter",function(){
  alert("hi");
});

three.addEventListener("mouseleave",function(){
  alert("hi");
});

four.addEventListener("focus",function(){
  console.log("hi");
});

five.addEventListener("blur",function(){
  alert("hi");
});
*/
var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var numOne2 = document.getElementById("num_one2");
var numTwo2 = document.getElementById("num_two2");
var numOne3 = document.getElementById("num_one3");
var numTwo3 = document.getElementById("num_two3");
var numOne4 = document.getElementById("num_one4");
var numTwo4 = document.getElementById("num_two4");
var sum= document.getElementById('add_sum');
var minus = document.getElementById("minus");
var multiply =document.getElementById("multiply");
var divide= document.getElementById("divide");

numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);
numOne2.addEventListener("input",subtract);
numTwo2.addEventListener("input",subtract);
numOne3.addEventListener("input",times);
numTwo3.addEventListener("input",times);
numOne4.addEventListener("input",div);
numTwo4.addEventListener("input",div);

function add(){
  var one = parseFloat(numOne.value)||0;
  var two = parseFloat(numTwo.value)||0;
  var total = one+two;
  sum.innerHTML = one+" + "+two+" is "+total;
}

function subtract(){
  var one = parseFloat(numOne2.value)||0;
  var two = parseFloat(numTwo2.value)||0;
  minus.innerHTML = one+" - "+two+ " is "+(one-two);
}

function times(){
  var one = parseFloat(numOne3.value)||0;
  var two = parseFloat(numTwo3.value)||0;
  multiply.innerHTML = one+" x "+two+ " is "+(one*two);
}

function div(){
  var one = parseFloat(numOne4.value)||0;
  var two = parseFloat(numTwo4.value)||0;
  divide.innerHTML = one+" / "+two+ " is "+(one/two);
}


//JavaScript for pictures
var flower = document.getElementById("flower");
//var flower_pic = document.getElementById("flower-pic");
var fish = document.getElementById("fish");
//var fish_pic = document.getElementById("fish-pic");
var dog = document.getElementById("dog");
//var dog_pic = document.getElementById("dog-pic");
/*
flower.addEventListener("click",function(){
  if(flower_pic.className === "hide"){
    flower_pic.className = "";
  }
  else{
    flower_pic.className = "hide";
  }
});

fish.addEventListener("click",function(){
  if(fish_pic.className === "hide"){
    fish_pic.className = "";
  }
  else{
    fish_pic.className = "hide";
  }
});

dog.addEventListener("click",function(){
  if(dog_pic.className === "hide"){
    dog_pic.className = "";
  }
  else{
    dog_pic.className = "hide";
  }
});*/

flower.addEventListener("click",picLink);
fish.addEventListener("click",picLink);
dog.addEventListener("click",picLink);

function picLink(){
  var allImages = document.querySelectorAll("img");

  for(var i=0; i<allImages.length; i++){
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if(pic.className === "hide"){
    pic.className = "";
  }
  else{
    pic.className = "hide";
  }
}
