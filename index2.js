// a closure is a function that can remember the variable from it's outer function even after the outer function has executed

function outer(){
  let x = 10;

  return function inner(){
    console.log(x);
  }
  
}

const func = outer();
// func()

function outerCount(){
  let count = 0;
  
  return function innerCount(){
    count++;
    console.log(count);
  }
}

const retVal = outerCount();

retVal(); //1
retVal(); //2
retVal(); //3