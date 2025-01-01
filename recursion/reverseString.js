const reverseString = (str, left = 0, right = str.length - 1) => {
  let newStrArr = str.split("");
  if (left >= right) {
    return newStrArr.join("");
  }
  newStrArr[left] = str[right];
  newStrArr[right] = str[left];
  return reverseString(newStrArr.join(""), left + 1, right - 1);
};
console.log(reverseString("hello")); // olleh
console.log(reverseString("can")); // nac
console.log(reverseString("man")); // nam
console.log(reverseString("cat")); // tac

const reverse = (str) => {
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
};
console.log(reverse("hello")); // olleh
console.log(reverse("can")); // nac
console.log(reverse("man")); // nam
console.log(reverse("cat")); // tac
