const isEmpty = (field, property, ending) => {
  if (property) {
    return field + property + ending;
  } else {
    return "";
  }
};

exports.createVCard = function (contactObject) {
  console.log("creating vCard");

  let vc = contactObject;

  const nl = "\r\n"; //Line break 
  let vcStart = "BEGIN:VCARD"; //Start of vCard
  let vcEnd = "END:VCARD"; //End of vCard
  let vcVersion = "VERSION:" + (vc.version || "3.0");  //vCard version

  let allEmails;
  let allNumbers;
  let allAddresses;
  let allDates;
  let allSocials;

  if (vc.emails) {
    allEmails = vc.emails
      .map((email) => `EMAIL;type=${email.label},INTERNET:${email.email}\r\n`)
      .join("");
  }

  if (vc.numbers) {
    allNumbers = vc.numbers
      .map((phone) => `TEL;type=${phone.label}:${phone.number}\r\n`)
      .join("");
  }
  if (vc.addresses) {
    allAddresses = vc.addresses
      .map((address) => `ADR;CHARSET=UTF-8;type=${address.label}:${address.address_text}\r\n`)
      .join("");
  }

  if (vc.addresses) {
    allDates = vc.dates
      .map((date, i) => {
        return `
    item${i + 1}.X-ABDATE:${date.date_text}
    item${i + 1}.X-ABLabel:${date.date_label}`;
      })
      .join("");
  }

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


  let vCardString =
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
    (allEmails ? allEmails : "") +
    (allNumbers ? allNumbers : '') +
    vcEnd;

  return vCardString;
};
