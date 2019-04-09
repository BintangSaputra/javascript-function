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
  let starRow = "";
  for (let i = 0; i <= starMark; i++) {
    for (let a = 0; a <= i; a++) {
      console.log((starRow += " *"));
    }
  }
};

stars(2);
