// const dayjs = require("dayjs");

// SOURCE:https://link.onecard.zone/${onecardObject?.onecard_shortid}
// REV:${lastUpdatedISO}
// console.log(vs);

exports.createVCard = function (contactObject) {
  console.log("creating vcard");
  let vc = contactObject;
  let vcs = "";

  // let vc =
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
  let allEmails;
  if (vc.emails) {
    allEmails = vc.emails
      .map((email) => {
        return `EMAIL;type=${email.label},INTERNET:${email.email}\r\n`;
      })
      .join("");
  }

  let allNumbers;
  if (vc.numbers)
    allNumbers = vc.numbers
      .map((phone) => {
        return `TEL;type=${phone.label}:${phone.number}\r\n`;
      })
      .join("");

  let allAddresses;
  if (vc.addresses) {
    allAddresses = vc.addresses
      .map((address) => {
        return `ADR;CHARSET=UTF-8;type=${address.label}:${address.address_text}\r\n`;
      })
      .join("");
  }

  let allDates;
  if (vc.addresses) {
    allDates = vc.dates
      .map((date, i) => {
        return `
    item${i + 1}.X-ABDATE:${date.date_text}
    item${i + 1}.X-ABLabel:${date.date_label}`;
      })
      .join("");
  }

  let allSocials;
  if (vc.addresses) {
    allSocials = vc.socials
      .map((social, i) => {
        return `X-SOCIALPROFILE;type=${social.social_label}:${social.social_text}\r\n`;
      })
      .join("");
  }

  // let lastUpdated = dayjs(parseInt(onecardObject?.updatedAt))
  //   .format("YYYYMMDD_HHMMss")
  //   .split("_");
  // let lastUpdatedISO = lastUpdated[0] + "T" + lastUpdated[1] + "Z";
  const nl = "\r\n";
  let vcStart = "BEGIN:VCARD";
  let vcEnd = "END:VCARD";
  let vcVersion = "VERSION:" + (vc.version || "3.0");
  // let vs1 = `
  // BEGIN:VCARD
  // VERSION:3.0
  // N:${vc.last_name};${vc.first_name};${vc.middle_name};${vc.prefix};${vc.suffix}
  // NICKNAME:${vc.nickname}
  // ${allAddresses}BDAY:${vc.birthday.split("-").join("")}
  // FN:${vc.first_name}
  // LN:${vc.last_name}
  // TITLE:${vc.job_title}${allDates}
  // NOTE:${vc.notes}
  // ${allSocials}${allNumbers}${allEmails}ORG:${vc.company};${vc.department}
  // SOURCE:https://link.onecard.zone/${onecardObject?.onecard_shortid}
  // REV:${lastUpdatedISO}
  // END:VCARD
  //     `;
  const isEmpty = (field, property, ending) => {
    if (property) {
      return field + property + ending;
    } else {
      return "";
    }
  };

  let vs =
    vcStart +
    nl +
    vcVersion +
    nl +
    isEmpty("N;CHARSET=UTF-8:", vc.last_name, ";") +
    isEmpty("", vc.first_name, ";") +
    isEmpty("", vc.middle_name, ";") +
    isEmpty("", vc.prefix, ";") +
    isEmpty("", vc.suffix, nl) +
    isEmpty("FN;CHARSET=UTF-8:", vc.first_name, nl) +
    isEmpty("LN;CHARSET=UTF-8:", vc.last_name, nl) +
    isEmpty("TITLE;CHARSET=UTF-8:", vc.title, nl) +
    isEmpty("NICKNAME;CHARSET=UTF-8:", vc.nickname, nl) +
    isEmpty("NOTE;CHARSET=UTF-8:", vc.notes, nl) +
    allEmails +
    allNumbers +
    vcEnd;

  return vs;
};
