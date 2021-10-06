// const dayjs = require("dayjs");

// SOURCE:https://link.onecard.zone/${onecardObject?.onecard_shortid}
// REV:${lastUpdatedISO}
// console.log(vs);

exports.createVCard = function (contactObject) {
  let vc = contactObject;

  let vcs = "";
  //   let vcs =
  //     "BEGIN:VCARD\r\nVERSION:" + (vc["version"] ? vc["version"] : "3.0\r\n");
  // vcs += "N:" +
  //   vc["first_name"] ? (vcs += "FN:" + vc["first_name"] + "\r\n") : null;
  //   vc["last_name"] ? (vcs += "LN:" + vc["last_name"]) : null;

  // console.log("This is a message from the demo package", vc["first_name"]);
  // let vc =
  //   prefix: "Mr.",
  //   first_name: "Zakher",
  //   middle_name: "Mahmoud",
  //   last_name: "Masri",
  //   suffix: "The First",
  //   birthday: "19930118",
  //   emails: [
  //     { email_label: "XAKHER", email_text: "zmasri@xakher.studio" },
  //     { email_label: "SIKKA", email_text: "zmasri@sikkaio" },
  //   ],
  //   phone_numbers: [
  //     { phone_label: "Personal", phone_text: "0505050505" },
  //     { phone_label: "Work", phone_text: "0506060606" },
  //   ],
  //   addresses: [
  //     { address_label: "Home", address_text: "3708 Fan bin fan, Saudi Arabia" },
  //     {
  //       address_label: "Office",
  //       address_text: "قيس بن بحر, الرياض, المملكة العربية السعودية",
  //     },
  //   ],
  //   socials: [],
  //   dates: [],
  // };
  // console.log("downloading vcard", vc);

  let allEmails = vc.emails
    ?.map((email) => {
      return `EMAIL;type=${email.email_label},INTERNET:${email.email_text}\r\n`;
    })
    .join("");

  let allNumbers = vc.phone_numbers
    ?.map((phone) => {
      return `TEL;type=${phone.phone_label}:${phone.phone_text}\r\n`;
    })
    .join("");

  let allAddresses = vc.addresses
    ?.map((address) => {
      return `ADR;CHARSET=UTF-8;type=${address.address_label}:${address.address_text}\r\n`;
    })
    .join("");

  let allDates = vc.dates
    ?.map((date, i) => {
      return `
  item${i + 1}.X-ABDATE:${date.date_text}
  item${i + 1}.X-ABLabel:${date.date_label}`;
    })
    .join("");

  let allSocials = vc.socials
    ?.map((social, i) => {
      return `X-SOCIALPROFILE;type=${social.social_label}:${social.social_text}\r\n`;
    })
    .join("");

  // let lastUpdated = dayjs(parseInt(onecardObject?.updatedAt))
  //   .format("YYYYMMDD_HHMMss")
  //   .split("_");
  // let lastUpdatedISO = lastUpdated[0] + "T" + lastUpdated[1] + "Z";
  const nl = "\r\n";
  let vcStart = "BEGIN:VCARD";
  let vcEnd = "END:VCARD";
  let vcVersion = "VERSION:" + (vc.version || "3.0");
  // let vs = `

  // N:${vc.last_name};${vc.first_name};${vc.middle_name};${vc.prefix};${vc.suffix}
  
  // ${allAddresses}BDAY:${vc.birthday?.split("-").join("")}
  // ${allDates}
  // ${allSocials}${allNumbers}${allEmails}ORG:${vc.company};${vc.department}

  // `;
  const isEmpty = (property) => {
    if (property) {
      return property;
    } else {
      return "";
    }
  };
  let vs =
    vcStart +
    nl +
    vcVersion +
    nl +
    "N:" +
    isEmpty(vc.last_name) +
    ";" +
    isEmpty(vc.first_name) +
    ";" +
    isEmpty(vc.middle_name) +
    ";" +
    isEmpty(vc.prefix) +
    ";" +
    isEmpty(vc.suffix) +
    nl +
    "FN:" +
    isEmpty(vc.first_name) +
    nl +
    "LN:" +
    isEmpty(vc.last_name) +
    nl +
    "TITLE:" +
    isEmpty(vc.job_title) +
    nl +
    "NICKNAME:" +
    isEmpty(vc.nickname) +
    nl +
    "NOTE:" +
    isEmpty(vc.notes) +
    nl +
    vcEnd;

  return vs;
};
