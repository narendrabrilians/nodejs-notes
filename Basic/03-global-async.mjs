async function sayHi() {
  return "Hi Narendra!";
}

sayHi().then((value) => {
  console.log(value);
});

// modules mjs
console.log("await " + (await sayHi()));
