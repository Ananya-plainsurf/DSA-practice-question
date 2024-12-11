const asciiNumber = (param) => {
  const newParam = param.split("").reverse();

  let finalStr = "";
  for (let i = 0; i < newParam.length; ) {
    let char = newParam[i] + newParam[i + 1];
    console.log(
      char,
      "final",
      finalStr,
      "char + newParam[i + 2]",
      char + newParam[i + 2]
    );
    if (char >= "65" && char <= "90") {
      i += 2;
      finalStr += String.fromCharCode(char);
    } else if (
      char + newParam[i + 2] >= "97" &&
      char + newParam[i + 2] <= "122"
    ) {
      console.log(
        "going into this else",
        char,
        String.fromCharCode(char + newParam[i + 2])
      );
      i += 2;
      return (finalStr += String.fromCharCode(char + newParam[i + 2]));
    }
    return i++;
  }
  console.log(finalStr);
  return finalStr;
};

console.log("asciiNumber", asciiNumber("10141108")); // o/p: Pre
