module.exports = function toReadable (number) {
  const numbersValuesAsStrings = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
  };

  if (numbersValuesAsStrings.hasOwnProperty(number))
      return numbersValuesAsStrings[number];
  const stringOfNum = `${number}`;
  if (stringOfNum.length === 2) {
      return getTwoDigitNumberString(numbersValuesAsStrings, stringOfNum);
  }
  if (stringOfNum.length === 3) {
      return getThreeDigitNumberString(numbersValuesAsStrings, stringOfNum);
  }
}

function getTwoDigitNumberString (values, str) {
    const [tens, ones] = str.split('');
    if (values.hasOwnProperty(str)) return values[str];
    if (tens === '0' && ones === '0') return '';
    if (tens === '0') return `${values[ones]}`;
    return `${values[tens + '0']} ${values[ones]}`;
};

function getThreeDigitNumberString(values, str) {
    const [hundred, ...tens] = str.split("");
    const tensStr = tens.join("");
    return `${values[hundred]} hundred ${getTwoDigitNumberString(
        values,
        tens.join("")
    )}`.trim();
};
