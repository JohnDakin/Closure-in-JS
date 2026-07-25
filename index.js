//Closures lets us to build functions that remember their previous execution
// they get a persistent memory/cache

function instructionGenerator(){
  function multiplyBy2(num){
    return num * 2;
  }
  return multiplyBy2;
}

// console.log(instructionGenerator()(3));
const generatedFunc = instructionGenerator();
const result = generatedFunc(3);
// console.log(result); //6



function outer(){
  let counter = 0;
  function incrementCounter(){
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

// console.log(outer());
const myNewFunc = outer();
myNewFunc();
myNewFunc();
myNewFunc();
myNewFunc();


console.log('---------------------');
const anotherMyNewFunc = outer();
anotherMyNewFunc();
anotherMyNewFunc();
anotherMyNewFunc();
anotherMyNewFunc();


//recursion in closure
function outer(){
  let counter = 0;
  return function inner(){
    counter++;
    console.log(counter);
    if(counter === 10){
      return;
    }
  inner();
  }
}

const result = outer();
result();