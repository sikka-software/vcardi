//TODO:
//fix addres to separate with ;
//add department
//update FN to formatted name: i.e. Mr. Zakher Mahmoud Masri

//https://en.wikipedia.org/wiki/VCard
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

exports.createVCard = function (vc) {
  const nl = "\r\n"; //Line break
  let vcStart = "BEGIN:VCARD"; //Start of vCard
  let vcEnd = "END:VCARD"; //End of vCard
  let vcVersion = "VERSION:" + (vc.version || "3.0"); //vCard version

  let allEmails; //Array of emails
  let allNumbers; //Array of numbers (phone, mobile, fax)
  let allAddresses; //Array of addresses
  let allDates; //Array of dates
  let allSocials; //Array of social links

  if (vc.emails) {
    allEmails = vc.emails
      .map((email) => `EMAIL;type=${email.label},INTERNET:${email.text}\r\n`)
      .join("");
  }
  if (vc.numbers) {
    allNumbers = vc.numbers
      .map((phone) => `TEL;type=${phone.label}:${phone.text}\r\n`)
      .join("");
  }
  if (vc.addresses) {
    allAddresses = vc.addresses
      .map(
        (address) =>
          `ADR;CHARSET=UTF-8;type=${address.label}:${address.text}\r\n`
      )
      .join("");
  }
  if (vc.dates) {
    allDates = vc.dates
      .map(
        (date, i) =>
          `item${i + 1}.X-ABDATE:${date.label}${nl}item${i + 1}.X-ABLabel:${
            date.text
          }${nl}`
      )
      .join("");
  }
  if (vc.socials) {
    allSocials = vc.socials
      .map(
        (social, i) =>
          `X-SOCIALPROFILE;TYPE=${social.label};x-user=${social.user}:${social.text}\r\n`
      )
      .join("");
  }

  let vCardString =
    vcStart +
    nl +
    vcVersion +
    nl +
    isEmpty("FN;CHARSET=UTF-8:", vc.first_name, "") +
    isEmpty(" ", vc.middle_name, "") +
    isEmpty(" ", vc.last_name, nl) +
    isEmpty(
      "N;CHARSET=UTF-8:",
      vc.last_name,
      vc.first_name || vc.middle_name || vc.prefix || vc.suffix ? ";" : nl
    ) +
    isEmpty(
      "",
      vc.first_name,
      vc.middle_name || vc.prefix || vc.suffix ? ";" : nl
    ) +
    isEmpty("", vc.middle_name, vc.prefix || vc.suffix ? ";" : nl) +
    isEmpty("", vc.prefix, vc.suffix ? ";" : "") +
    isEmpty("", vc.suffix, nl) +
    isEmpty("TITLE;CHARSET=UTF-8:", vc.title, nl) +
    isEmpty("NICKNAME;CHARSET=UTF-8:", vc.nickname, nl) +
    isEmpty("NOTE;CHARSET=UTF-8:", vc.notes, nl) +
    isEmpty("ORG;CHARSET=UTF-8:", vc.organization, vc.department ? ";" : nl) +
    isEmpty("", vc.department, nl) +
    isEmpty("ROLE;CHARSET=UTF-8:", vc.role, nl) +
    (allEmails ? allEmails : "") +
    (allNumbers ? allNumbers : "") +
    (allSocials ? allSocials : "") +
    (allAddresses ? allAddresses : "") +
    (allDates ? allDates : "") +
    isEmpty("REV:", vc.last_updated, nl) +
    isEmpty("SOURCE:", vc.source, nl) +
    vcEnd;

  return vCardString;
};
