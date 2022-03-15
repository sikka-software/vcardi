const stuff = require("./index.js");
const fs = require('fs');
let mycard = stuff.createVCard({
  last_updated: new Date().toISOString(),
  source: 'https://link.onecard.zone/myCard.vcf',
  prefix: "Mr.",
  first_name: "Zakher",
  middle_name: "Mahmoud",
  last_name: "Masri",
  suffix: "The First",
  nickname: "Zak",
  organization: "Sikka",
  department: "Admin",
  role: "Chief Executive Officer",
  title: "",
  notes: "here are the notes",
  dates: [{
    label: 'Birthday',
    text: '19930118'
  }, {
    label: 'Birthday',
    text: '19930118'
  },
  {
    label: 'Anniversary',
    text: '20220101'
  }],
  numbers: [
    {
      label: "Work",
      text: "050025505050",
    },
    {
      label: "Office",
      text: "050025505050",
    },
    {
      label: "Fax",
      text: "050025505050",
    },
  ],
  emails: [
    {
      label: "Work",
      text: "zmasri@sikka.io",
    },
    {
      label: "Office",
      text: "zakhermasri@gmail.com",
    },
    {
      label: "Crypto",
      text: "masrizakher@gmail.com",
    },
  ],
  socials: [
    {
      label: "Twitter",
      text: "https://twitter.com/zaaakher",
    },
    {
      label: "Instagram",
      text: "https://instagram.com/zaaakher",
    },
    {
      label: 'custom',
      text: 'https://something.com'
    }
  ],
  addresses: [
    {
      label: "HomeLabel",
      text: "3489 Qsis Bin haa, Dammam ,Saudi Arabia",
    }
  ],
});
console.log(mycard);

// fs.writeFile('contactCard.vcf', mycard, function (err) {
//   if (err) throw err;
// });
