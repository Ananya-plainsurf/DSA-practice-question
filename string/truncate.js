const truncate = (str, num) => {
  if (str.length < num) {
    return str;
  }

  return str.slice(0, num) + "...";
};
console.log(truncate("annaya is a mad gir", 5));
console.log(truncate("ann", 5));
