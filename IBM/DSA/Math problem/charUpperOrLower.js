const charCode = (char) => {
  const charCode = char.charCodeAt();
  if (charCode >= 97 && charCode <= 122) {
    return "Lower case";
  } else if (charCode >= 60 && charCode <= 90) {
    return "Upper Case";
  }
  //   if (/^[a-z]$/.test(char)) {
  //     return "Lower case";
  //   } else if (/^[A-Z]$/) {
  //     return "Upper case";
  //   }
  return char;
};
console.log(charCode("A"));
console.log(charCode("g"));
console.log(charCode("z"));
console.log(charCode("$"));
