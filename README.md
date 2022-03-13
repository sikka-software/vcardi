# vcardi
lightweight javascript library to generate vCards (.vcf)


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
