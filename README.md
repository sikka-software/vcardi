# vcardi
lightweight javascript library to generate vCards (.vcf)

[![NPM](https://img.shields.io/npm/v/@sikka/vcardi.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@sikka/vcardi)
[![NPM](https://img.shields.io/npm/dt/@sikka/vcardi.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@sikka/vcardi)


# Upcoming updates
- [ ] Add Logo imagedata
- [ ] Add Photo imagedata
- [ ] Add department


## Getting Started
```
npm i vcardi
```

## How to use

```
import VCARDI from '@sikka/vcardi'


let myContactInfo = {
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
  dates: [{
    label: 'Birthday',
    text: '19930118'
  },{
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
}

let myVCard = VCARDI.createVCard(myContactInfo)


```
## Contribute
To contribute, clone the repository and edit ```/index.js```
```
git clone git@github.com:sikka-software/vcardi.git
cd vcardi
```
