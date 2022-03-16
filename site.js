const isEmpty = (field, property, ending) => {
  if (property) {
    return field + property + ending;
  } else {
    return "";
  }
};

const createVCard = function (vc) {
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
        (social, i) => `X-SOCIALPROFILE;TYPE=${social.label}:${social.text}\r\n`
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
    isEmpty("ORG;CHARSET=UTF-8:", vc.organization, nl) +
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

function downloadURI(uri, name) {
  var link = document.createElement("a");
  // If you don't know the name or want to use
  // the webserver default set name = ''
  link.setAttribute("download", name);
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

let fn = document.getElementById("first-name").value;

const form = document.getElementById("maker");

form.addEventListener("submit", (event) => {
  // stop form submission

  event.preventDefault();
  //   console.log(createVCard);
  //   for (let i = 0; i < event.target.length - 1; i++) {
  //     console.log("making vcard", event.target[i].value);
  //   }
  // let downloadButton = document.createElement("button");
  // downloadButton.innerHTML = "downlaod vcard";
  let result = document.getElementById("result");
  let mycard = createVCard({
    last_updated: new Date().toISOString(),
    prefix: form.elements["prefix"].value,
    first_name: form.elements["first-name"].value,
    middle_name: form.elements["middle-name"].value,
    last_name: form.elements["last-name"].value,
    suffix: form.elements["suffix"].value,
    nickname: form.elements["nickname"].value,
    organization: form.elements["organization"].value,
    // department: form.elements["department"].value,
    role: form.elements["role"].value,
    title: form.elements["title"].value,
    notes: form.elements["notes"].value,
    dates: [
      {
        label: "Birthday",
        text: form.elements["birthday"].value,
      },
    ],
    numbers: [],
    emails: [],
    socials: [],
    addresses: [],
  });
  // console.log(mycard);
  result.innerHTML = mycard + "</br>";
  // console.log("suffix is", form.elements["suffix"].value);
  // result.appendChild(downloadButton);
  // downloadButton.click();
});
