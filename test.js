const stuff = require("./index.js");
const fs = require('fs');
let mycard = stuff.createVCard({
  prefix: "Mr.",
  first_name: "Zakher",
  middle_name: "Mahmoud",
  last_name: "Masri",
  suffix: "The First",
  nickname: "Zak",
  organization: "Sikka",
  department: "Admin",
  role: "Chief Executive Officer",
  title: "CEO",
  notes: "here are the notes",
  numbers: [
    {
      label: "Work",
      number: "050025505050",
    },
    {
      label: "Office",
      number: "050025505050",
    },
    {
      label: "Fax",
      number: "050025505050",
    },
  ],
  emails: [
    {
      label: "Work",
      email: "zmasri@sikka.io",
    },
    {
      label: "Office",
      email: "zakhermasri@gmail.com",
    },
    {
      label: "Crypto",
      email: "masrizakher@gmail.com",
    },
  ],
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/zaaakher",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/zaaakher",
    },
    {
      label: 'custom',
      link: 'https://something.com'
    }
  ],
  addresses: [
    {
      label: "HomeLabel",
      address_text: "3489 Qsis Bin haa, Dammam ,Saudi Arabia",
    }
  ],
});
console.log(mycard);

// fs.writeFile('contactCard.vcf', mycard, function (err) {
//   if (err) throw err;
// });
