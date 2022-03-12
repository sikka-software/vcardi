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
  suffix: "",
  nickname: "Zak",
  organization: "Sikka Software",
  department: "Admin",
  role: "Chief Executive Officer",
  title: "CEO",
  notes: "here are the notes",
  numbers: [
    {
      label: "Work",
      number: "0512345678",
    },
    {
      label: "Office",
      number: "0512345678",
    },
    {
      label: "Fax",
      number: "0512345678",
    },
  ],
  emails: [
    {
      label: "Work",
      email: "zmasri@sikka.io",
    },
    {
      label: "Support",
      email: "support@sikka.io",
    },
    {
      label: "Jobs",
      email: "jobs@sikka.io",
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
