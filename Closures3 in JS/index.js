/*
let num2 = 3;

function sum(){
  let num1 = 2;
  
  return function (){
    return num1 + num2;
  }
}

let myFunc = sum();

console.dir(myFunc);
*/

function bankAccount(initialBalance){
  let balance = initialBalance;
  return function(){
    return balance;
  }
}

let account = bankAccount(100000);
console.log(account());

// console.log(balance); //ReferenceError: balance is not defined

console.dir(account);

function stopWatch(){
  var startTime = Date.now();

  function getDelay(){
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

var timer = stopWatch();

//creating a delay
for (let i = 0; i< 100000000; i++){
  Math.random() * 1000000;
}
//starttime still knows the current time because of closure
timer();
timer();
timer();

console.dir(timer);

//manually clearing the refference if we're certain timer won't be used again thus saving on memory

//garbage collection happen after setting timer to null and it is removed from the memory
timer = null

// timer(); //TypeError: timer is not a function


//Closures in asynchronous code 

function asyncExample(){
  var a = 20;

  setTimeout(function(){
    console.log(a);
  },3000)
}

asyncExample();

//closure hold a refference to the variable
//a now becomes 30 since it's referenced within the closure because of the key word var that's why it's advised to use let

var a = 20;

function asyncExample(){

  function myFunc(){
    console.log(a);
  }

  setTimeout(myFunc,3000)
}

asyncExample();

a = 30;
/*
function apiFunction(url){
  function handleResponse(){
    console.log(url);
  }
  fetch(url).then(handleResponse);
  console.dir(handleResponse);
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");

console.log("I am here");
*/
var i; // var keyword is function scoped and it is hoisted to the top of the function or global scope. Therefore, it will be accessible outside the for loop and its value will be 3 after the loop ends.
for(i = 0; i < 3; i++){
  setTimeout(function (){
    console.log(i);
  }, 1000 * i);
}

console.log(i); //output = 3 since var is hoisted to the global scope and its value changes to the last value which is 3 that is then referrenced
console.log("After for loop");