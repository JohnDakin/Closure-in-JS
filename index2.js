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

//Real World Examples

function createBankAccount(initialBalance){
  let balance = initialBalance;

  return {
      deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited ", amount, " Current Balance ", balance);
    },
    withdraw: (amount) => {
      if(amount > balance){
        console.warn("Insufficient Fund");
      }else if(amount === 0){
        console.warn("Minimum amount to withdraw is 1");
      }else{
        balance = balance - amount;
        console.log("Withdrawn ", amount, " Current Balance ", balance);
      }
      
    },
    checkBalance: () => console.log("Current Balance", balance)
  }

}

const dakinAccount = createBankAccount(100);
console.log(dakinAccount);

console.log(dakinAccount.deposit(300)); // 400

console.log(dakinAccount.withdraw(50)); // 350

console.log(dakinAccount.withdraw(20)); // 330

console.log(dakinAccount.withdraw(50)); // 280

console.log(dakinAccount.withdraw(150)); // 130

console.log(dakinAccount.checkBalance()) // 130


// memory leak
function dealingWithBigData(){
  let bigData = new Array(10000000).fill('*');

  return function (){
    console.log(bigData[3]);
  }
}

const variable12 = dealingWithBigData();
console.log(variable12());

// usefulness of Closure

//1. You can keep the variables private without exposing them
//2. You can stop variable pollution.
//3. You can create a function factory
//4. You can keep a variable alive between multiple calls.

function timer(){
  let secs = 0;
  
  return function(){
    secs++
    console.log("elapsed seconds ",secs);
  }
}

const timerInstance = timer();

timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3


//closure in Event handler

function setupButton(){
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function (){
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();