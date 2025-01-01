function anagramResult(words) {
  for (let i = 0; i < words.length - 1; ) {
    let obj1 = {};
    let obj2 = {};
    let left = words[i];
    let right = words[i + 1];

    if (left.length !== right.length) {
      i++;
      continue;
    }
    for (let j in left) {
      obj1[left[j]] = (obj1[left[j]] || 0) + 1;
    }
    for (let j in right) {
      obj2[right[j]] = (obj2[right[j]] || 0) + 1;
    }

    let isAnalog = true;
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        isAnalog = false;
        break;
      }
    }

    if (isAnalog) {
      words.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return words;
}
console.log(anagramResult(["abba", "baba", "bbaa", "cd", "cd"])); // ['abba','cb']
console.log(anagramResult(["a", "b", "c", "d", "e"])); // ["a","b","c","d","e"]
