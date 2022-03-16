const vCardi = require("./index.js");

let myVCard = vCardi.createVCard({
  last_updated: new Date().toISOString(),
  source: "https://sikka.io",
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
  dates: [
    {
      label: "Birthday",
      text: "19900101",
    },
    {
      label: "Birthday",
      text: "19900101",
    },
    {
      label: "Anniversary",
      text: "20220101",
    },
  ],
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
      user: "zaaakher",
      text: "https://twitter.com/zaaakher",
    },
    {
      label: "Instagram",
      user: "zaaakher",
      text: "https://instagram.com/zaaakher",
    },
    {
      label: "custom",
      user: "zaaakher",
      text: "https://something.com",
    },
  ],
  addresses: [
    {
      label: "HomeLabel",
      text: "3489 Qsis Bin haa, Dammam ,Saudi Arabia",
    },
  ],
});
console.log(myVCard);
