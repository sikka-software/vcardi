const dayjs = require("dayjs");
let vc = {
  prefix: "Mr.",
  first_name: "Zakher",
  middle_name: "Mahmoud",
  last_name: "Masri",
  suffix: "The First",
  birthday: "19930118",
  emails: [
    { email_label: "XAKHER", email_text: "zmasri@xakher.studio" },
    { email_label: "SIKKA", email_text: "zmasri@sikkaio" },
  ],
  phone_numbers: [
    { phone_label: "Personal", phone_text: "0505050505" },
    { phone_label: "Work", phone_text: "0506060606" },
  ],
  addresses: [
    { address_label: "Home", address_text: "3708 Fan bin fan, Saudi Arabia" },
    {
      address_label: "Office",
      address_text: "قيس بن بحر, الرياض, المملكة العربية السعودية",
    },
  ],
  socials: [],
  dates: [],
};
console.log("downloading vcard", vc);

let allEmails = vc.emails
  .map((email) => {
    return `EMAIL;type=${email.email_label},INTERNET:${email.email_text}\r\n`;
  })
  .join("");

let allNumbers = vc.phone_numbers
  .map((phone) => {
    return `TEL;type=${phone.phone_label}:${phone.phone_text}\r\n`;
  })
  .join("");

let allAddresses = vc.addresses
  .map((address) => {
    return `ADR;CHARSET=UTF-8;type=${address.address_label}:${address.address_text}\r\n`;
  })
  .join("");
let allDates = vc.dates
  .map((date, i) => {
    return `
item${i + 1}.X-ABDATE:${date.date_text}
item${i + 1}.X-ABLabel:${date.date_label}`;
  })
  .join("");

let allSocials = vc.socials
  .map((social, i) => {
    return `X-SOCIALPROFILE;type=${social.social_label}:${social.social_text}\r\n`;
  })
  .join("");

// let lastUpdated = dayjs(parseInt(onecardObject?.updatedAt))
//   .format("YYYYMMDD_HHMMss")
//   .split("_");
// let lastUpdatedISO = lastUpdated[0] + "T" + lastUpdated[1] + "Z";

let vs = `
BEGIN:VCARD
VERSION:3.0
N:${vc.last_name};${vc.first_name};${vc.middle_name};${vc.prefix};${vc.suffix}
NICKNAME:${vc.nickname}
${allAddresses}BDAY:${vc.birthday.split("-").join("")}
FN:${vc.first_name}
LN:${vc.last_name}
TITLE:${vc.job_title}${allDates}
NOTE:${vc.notes}
${allSocials}${allNumbers}${allEmails}ORG:${vc.company};${vc.department}
END:VCARD
`;
// SOURCE:https://link.onecard.zone/${onecardObject?.onecard_shortid}
// REV:${lastUpdatedISO}
console.log(vs);
