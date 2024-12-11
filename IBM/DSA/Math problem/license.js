const license = (age) => {
  return age < 18 ? "No license Fuck off" : "License granted";
};
console.log(license(17));
console.log(license(21));
