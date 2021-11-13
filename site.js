// const { createVCard } = require("..");
// const DD = require("https://cdn.jsdelivr.net/npm/@sikka/vcardi@1.1.0/index.min.js");
console.log("we are in site");
console.log("DD ", vCardi); //how can we use the npm package here?
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
