const validPhoneNumberRegex = [
  /^((1\s\d{3}|\d{3}))\-\d{3}\-\d{4}/, // 1 555-555-5555 or 555-555-5555
  /^(1\s|())\(\d{3}\)\d{3}\-\d{4}/, // 1 (555)555-5555 or (555)555-5555
  /^(1\s|())\(\d{3}\)\s\d{3}\-\d{4}/, // 1 (555) 555-5555 or (555) 555-5555
  /^(1\s\d{3}|\d{3})\s\d{3}\s\d{4}/, // 1 555 555 5555 or 555 555 5555
  /^(1\s\d{10})|(^\d{10}$)/, // 1 5555555555 or 5555555555
];

function telephoneCheck(str) {
  return validPhoneNumberRegex.some((regExp) => regExp.test(str));
}

module.exports = telephoneCheck;
