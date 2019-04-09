function sum(numberA, numberB) {
  return numberA + numberB;
}

const resultA = sum(1, 2);
const resultB = sum(-20, -2000);

console.log(resultA);
console.log(resultB);

// ===================================

const myAge = 23;

function checkAge(age) {
  if (age > 17) return true;
  else return false;
}

function checkAllowance() {
  const allowed = checkAge(myAge);
  if (allowed) console.log("You are Allowed");
  else console.log("You are not Allowed");
}

//  ==========================================

const showName = function(name) {
  console.log(`Name ${name}!`);
};

const nameA = "Alpha";
const nameB = "Beta";

console.log(nameA);
console.log(nameB);

//  ===========================================

const checkGeneration = function(age) {
  if (age > 45) {
    console.log("X Generation");
  } else if (age <= 45 && age >= 38) {
    console.log("Alpha Generation");
  } else if (age < 38 && age > 19) {
    console.log("Millenial Generation");
  } else {
    console.log("Z Generation");
  }
};

checkGeneration(50);
checkGeneration(35);
checkGeneration(15);

//  =============================================

const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 3; i <= times; i++) {
    newText += mark;
  }
  console.log(newText);
};

addMarks("Hello", "!", 1);
addMarks("Hello", "!", 10);
addMarks("How are you", "?", 3);

//  ===============================================

const stars = starMark => {
  for (let i = 0; i <= starMark; i++) {
    let starRow = "";
    for (let a = starMark; a >= i; a--) {
      starRow += " ";
    }
    for (let b = 0; b <= i * 2; b++) {
      starRow += "*";
    }
    console.log(starRow);
  }
};

stars(5);

//  ==================================================

const showNameWithAge = (name = "Unknown", age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`;
  return nameWithAge;
};

const alpha = showNameWithAge("Alpha", 11);
const betty = showNameWithAge("Betty", 42);
const gamma = showNameWithAge("Gamma", 30);

console.log(alpha);
console.log(betty);
