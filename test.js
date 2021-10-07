const stuff = require("./index.js");
let mycard = stuff.createVCard({
  prefix: "Mr.",
  first_name: "Zakher",
  middle_name: "Mahmoud",
  last_name: "Masri",
  suffix: "The First",
  nickname: "Zak",
  organization: "Sikka",
  department: "Admin",
  role: "Administration",
  title: "CEO",
  notes: "d23d23d9-",
  numbers: [
    {
      label: "something",
      number: "050025505050",
    },
    {
      label: "something",
      number: "050025505050",
    },
    {
      label: "something",
      number: "050025505050",
    },
  ],
  emails: [
    {
      label: "something",
      email: "050025505050",
    },
    {
      label: "something",
      email: "050025505050",
    },
    {
      label: "something",
      email: "050025505050",
    },
  ],
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/zaaakher",
    },
    {
      label: "Instagram",
      link: "https://twitter.com/instagram",
    },
  ],
});
console.log(mycard);
