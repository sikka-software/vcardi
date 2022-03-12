//Typical VCARD looks like the one below

// BEGIN:VCARD
// VERSION:3.0
// FN;CHARSET=UTF-8:Zakher Mahmoud Masri
// N;CHARSET=UTF-8:Masri;Zakher;Mahmoud;Mr;TheFirst
// NICKNAME;CHARSET=UTF-8:Zak
// EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:zmasri@sikka.io
// EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:support@sikka.io
// TEL;TYPE=CELL:96CELL0062365
// TEL;TYPE=PAGER:9665PAGER00623655
// TEL;TYPE=HOME,VOICE:0138HOME78787
// TEL;TYPE=WORK,VOICE:966WORKPHONE0623655
// TEL;TYPE=HOME,FAX:966FAX34289
// TEL;TYPE=WORK,FAX:966WORKFAX234322
// BDAY:20191111
// ANNIVERSARY:20221010
// LOGO;ENCODING=b;TYPE=PNG:IMAGEDATA..
// PHOTO;ENCODING=b;TYPE=PNG:IMAGEDATA..
// LABEL;CHARSET=UTF-8;TYPE=HOME:MyHomeLabel
// ADR;CHARSET=UTF-8;TYPE=HOME:;;3798;Dammam;Eastern;32333;Saudi Arabia
// LABEL;CHARSET=UTF-8;TYPE=WORK:MyWorkLabel
// ADR;CHARSET=UTF-8;TYPE=WORK:;;qsiss;Riyadh;Eastern;32555;Saudi Arabia
// TITLE;CHARSET=UTF-8:CEOTITLE
// ROLE;CHARSET=UTF-8:ADMINROLE
// ORG;CHARSET=UTF-8:SikkaSoftware
// URL;type=WORK;CHARSET=UTF-8:https://sikka.io
// X-SOCIALPROFILE;TYPE=twitter:https://twitter.com/zaaakher
// X-SOCIALPROFILE;TYPE=linkedin:https://linkedin.com/zaaakher
// X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/zaaakher
// X-SOCIALPROFILE;TYPE=CustomLINK:https://myCustom.link/here
// REV:2022-03-12T20:45:15.066Z
// END:VCARD


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
  if (vc.dates) {
    allDates = vc.dates
      .map((date, i) => `item${i + 1}.X-ABDATE:${date.label}${nl}item${i + 1}.X-ABLabel:${date.text}${nl}`)
      .join("");
  }

  if (vc.socials) {
    allSocials = vc.socials
      .map((social, i) => `X-SOCIALPROFILE;TYPE=${social.label}:${social.link}\r\n`)
      .join("");
  }

  // let lastUpdated = dayjs(parseInt(onecardObject?.updatedAt))
  //   .format("YYYYMMDD_HHMMss")
  //   .split("_");
  // let lastUpdatedISO = lastUpdated[0] + "T" + lastUpdated[1] + "Z";

  // ${allSocials}${allNumbers}${allEmails}ORG:${vc.company};${vc.department}
  // SOURCE:https://link.onecard.zone/${onecardObject?.onecard_shortid}
  // REV:${lastUpdatedISO}
  // END:VCARD
  //     `;

  //add source link
  //fix addres to separate with ;
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
    isEmpty("ORG;CHARSET=UTF-8:", vc.organization, nl) +
    isEmpty("TITLE;CHARSET=UTF-8:", vc.title, nl) +
    isEmpty("ROLE;CHARSET=UTF-8:", vc.role, nl) +
    (allEmails ? allEmails : "") +
    (allNumbers ? allNumbers : '') +
    (allSocials ? allSocials : '') +
    (allAddresses ? allAddresses : '') +
    (allDates ? allDates : '') +
    vcEnd;

  return vCardString;
};
