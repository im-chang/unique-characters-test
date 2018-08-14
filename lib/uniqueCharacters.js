module.exports = str => {
  if (typeof str !== "string" || !str || !str.length) return;
  let count;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    let unique = true;
    for (let j = 0; j < str.length; j++) {
      if (letter === str[j] && i !== j) unique = false;
    }
    if (unique) return letter;
  }
};
