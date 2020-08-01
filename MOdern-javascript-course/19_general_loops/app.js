// For Loop

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my  favaroite number");
    continue;
  }

  if (i === 5) {
    console.log("stop the loop");

    break;
  }
  console.log(i);
}

// WHILE LOOP

let i = 0;

while (i < 10) {
  console.log("number " + i);
  i++;
}

// DO While loop

let i = 0;

do {
  console.log("number " + i);
  i++;
} while (i < 10);

// LOOP through Array

const cars = ["ford", "shift", "Honda", "asdasd"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

FOREACH method on arrays

cars.forEach(function (car, index, array) {
  console.log(`${index} :${car}`);
  console.log(array);
});

// //MAP

const users = [
  { id: 1, name: "john " },
  { id: 2, name: "doe " },
  { id: 3, name: "carn" },
  { id: 4, name: "carn" },
];

const ids = users.map((user) => {
  return user.id;
});

console.log(ids);

// FOR IN LOOP

const user = {
  first: "katta",
  name: "sridhar",
  age: "25",
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
