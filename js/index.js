// PROBLEM 1: SLEEPING IN
// Write a function called sleepIn that takes in two boolean parameters: weekday and vacation.
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on
// vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in. So some

const sleepIn = (weekday, vacation) => {
  return !weekday || vacation;
};

// console.log(sleepIn(false, false));
// console.log(sleepIn(true, false));
// console.log(sleepIn(false, true));

// PROBLEM 2: MONKEY TROUBLE
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We
// are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

const monkeyTrouble = (aSmile, bSmile) => {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
};

// console.log(monkeyTrouble(true, true));
// console.log(monkeyTrouble(false, false));
// console.log(monkeyTrouble(true, false));

// PROBLEM 3: STRING TIMES
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

const stringTimes = (string, n) => {
  //   result = string;
  //   for (let i = 1; i < n; i++) {
  //     result += string;
  //   }
  //   return result;
  return string.repeat(n);
};

// console.log(stringTimes("Hi", 2));
// console.log(stringTimes("Hi", 3));
// console.log(stringTimes("Hi", 1));

// PROBLEM 4: LUCKY SUM
// Given 3 numerical values, a b c, return their sum. However, if one of the values is 13 then it does not
// count towards the sum and values to its right do not count.
const luckySum = (a, b, c) => {
  if (a == 13) return c;
  if (b == 13) return a;
  if (c == 13) return a + b;
  return a + b + c;
};

// console.log(luckySum(1, 2, 3));
// console.log(luckySum(1, 2, 13));
// console.log(luckySum(1, 13, 3));

// PROBLEM 5:
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is
// 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5
// higher in all cases.

const caught_speeding = (speed, is_birthday) => {
  const bonus_speed = is_birthday ? speed - 5 : speed;
  if (bonus_speed <= 60) return 0;
  if (bonus_speed > 80) return 2;
  return 1;
};

console.log(caught_speeding(60, false));
console.log(caught_speeding(65, false));
console.log(caught_speeding(65, true));
console.log(caught_speeding(85, false));
console.log(caught_speeding(85, true));
