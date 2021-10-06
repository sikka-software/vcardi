// const { createVCard } = require("..");

console.log("we are in site");

let fn = document.getElementById("first-name").value;
console.log("something", fn);
const form = document.getElementById("maker");

form.addEventListener("submit", (event) => {
  // stop form submission

  event.preventDefault();
//   console.log(createVCard);
  //   for (let i = 0; i < event.target.length - 1; i++) {
  //     console.log("making vcard", event.target[i].value);
  //   }
  console.log("suffix is", form.elements["suffix"].value);
});
