// Problem 1
// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

const array = [1, 2, 3, 4, 5]

const sumNums1 = (numbers) => {
  var answer = 0;
  for (var i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer
}

const sumNums2 = (numbers) => {
  var answer = 0
  while (numbers.length) {
    answer += numbers[0]
    numbers.shift()
  }
  return answer
}


const sumNums3 = (numbers, answer = 0) => {
  if (!numbers.length) {
    console.log(answer)
    return answer
  }

  const newAnswer = answer + numbers[0]
  numbers.shift()
  return sumNums3(numbers, newAnswer)
}

// Problem 2
// Write a function that combines two lists by alternatingly taking elements.For example: given the two lists[a, b, c] and[1, 2, 3], the function should return [a, 1, b, 2, c, 3].

const array1 = ['a', 'b', 'c']
const array2 = [1, 2, 3]

const combine = (array1, array2, combinedArray = []) => {
  if (!array1.length && !array2.length) {
    return combinedArray
  }

  combinedArray.push(array1.shift())
  combinedArray.push(array2.shift())
  return combine(array1, array2, combinedArray)
}

// Problem 3
// Write a function that computes the list of the first 100 Fibonacci numbers.By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

const fibonacci = () => {
  const sequence = [0, 1]
  let i = 1
  while (sequence.length < 100) {
    let newNum = sequence[i] + sequence[i - 1]
    sequence.push(newNum)
    i++
  }
  return sequence
}

// Problem 4
// Write a function that given a list of non negative integers, arranges them such that they form the largest possible number.For example, given[50, 2, 1, 9], the largest formed number is 95021.

const integers = [3, 30, 34, 5, 9]

const largestNum = (array) => {
  array.sort()
  array.reverse()
  return array.join('')
}

// Problem 5
// The examples below show you how to write function accum:

//   Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

// Create this function

function accum(string) {
  const letterArray = string.split('')
  const output = letterArray.map((letter, index) => {
    if (index === letterArray.length - 1) {
      return letter.toUpperCase() + letter.toLowerCase().repeat(index)
    }
    return letter.toUpperCase() + letter.toLowerCase().repeat(index) + '-'
  })
  return output.join('')
}


// Problem 6
// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0](array with a zero).

function oddOrEven(array) {
  const total = array.reduce((sum, number) => {
    return sum + number
  }, 0)
  return total % 2 === 0 ? 'even' : 'odd'
}

// Problem 7
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
  const splitMessage = message.split('')
  const encodedLetters = splitMessage.map(letter => {
    if (lowercase.includes(letter)) {
      const index = (lowercase.indexOf(letter) + 13) % 26
      return lowercase[index]
    } else if (lowercase.includes(letter.toLowerCase())) {
      const index = (lowercase.indexOf(letter.toLowerCase()) + 13) % 26
      return lowercase[index].toUpperCase()
    } else {
      return letter
    }
  })
  return encodedLetters.join('')
}

// Problem 8
// Given an integer as input, can you round it to the next(meaning, "higher") 5?
// Input may be any positive or negative integer(including 0).
// You can assume that all inputs are valid integers.

function roundToNext5(num) {
  while (num % 5 !== 0) {
    num++
  }
  return num
}

// Problem 9
// Build Tower by the following given argument:
// number of floors(integer and always greater than 0).
// Tower block is represented as *
// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

function towerBuilder(nFloors) {
  let tower = [];
  let num = 1;
  for (let index = 0; index < nFloors; index++) {
    tower.push(' '.repeat(nFloors - num) + '*'.repeat(index + num) + ' '.repeat(nFloors - num))
    num++
  }
  return tower
}

// Problem 10
// Take a number: 56789. Rotate left, you get 67895.
// Keep the first digit in place and rotate left the other digits: 68957.
// Keep the first two digits in place and rotate the other ones: 68579.
// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
// You have the following sequence of numbers:
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
// and you must return the greatest: 68957.

function rotate(array) {
  let movingNum = array.shift()
  array.push(movingNum)
  return array
}

function maxRot(number) {
  let options = []
  let index = 0
  let arrayNum = [...number.toString()]
  while (index < arrayNum.length) {
    if (index === 0) {
      options.push(rotate(arrayNum).join(''))
      index++
    } else {
      let currentNum = options[index - 1]
      let currentArray = [...currentNum.toString()]
      let front = currentArray.splice(0, index)
      options.push(`${front.join('')}${rotate(currentArray).join('')}`)
      index++
    }
  }
  options.push(number.toString())
  return Math.max(...options)
}

// Problem 11
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from - 2 to + 26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each.Each list contains information for a single potential member.Information consists of an integer for the person's age and an integer for the person's handicap.


// Output
// Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
  return data.map(array => {
    if (array[0] >= 55 && array[1] > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
}

// Problem 12
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

const uniqueInOrder = ([...input]) => {
  let answer = []
  input.forEach(element => {
    if (element !== answer[answer.length - 1]) {
      answer.push(element)
    }
  })
  return answer
}

// Problem 13
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:
// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'

function list(people) {
  if (people.length === 1) {
    return people[0].name
  } else if (people.length === 2) {
    return (people[0].name + ' & ' + people[1].name)
  } else if (people.length === 3) {
    return (people[0].name + ', ' + people[1].name + ' & ' + people[2].name)
  } else {
    let stringOfNames = ''
    let index = 0
    while (index < people.length) {
      if (index === 0) {
        stringOfNames += people[index].name
        index++
      } else if (index === people.length - 1) {
        stringOfNames += (' & ' + people[index].name)
        index++
      } else {
        stringOfNames += (', ' + people[index].name)
        index++
      }
    }
    return stringOfNames
  }
}

// Problem 14
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.We followed him to a secret warehouse, where we assume to find all the stolen stuff.The door to this warehouse is secured by an electronic combination lock.Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit(horizontally or vertically, but not diagonally).E.g.instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks.You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm.That's why we can try out all possible (*) variations.

//   * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations ? It would be nice to have a function, that returns an array(or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits.We could name the function getPINs(get_pins in python, GetPINs in C#).But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's.We already prepared some test cases for you.

//   Detective, we count on you!

function getPINs(observed) {
  let arrayOfDigits = observed.split('')
  let combinations = []

  if (arrayOfDigits.length === 1) {
    data[arrayOfDigits[0]].forEach(number => combinations.push(number))
  } else {
    arrayOfDigits.forEach((digit, index) => {
      data[digit].forEach(altNum => {
        combinations.push(setCharAt(observed, index, altNum))
      })
    })
  }


  return combinations
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

const data = {
  '1': ['1', '2', '4'],
  '2': ['1', '2', '3', '5'],
  '3': ['2', '3', '6'],
  '4': ['1', '4', '5', '7'],
  '5': ['2', '4', '5', '6', '8'],
  '6': ['3', '5', '6', '9'],
  '7': ['4', '7', '8'],
  '8': ['5', '7', '8', '9', '0'],
  '9': ['6', '8', '9'],
  '0': ['0', '8'],
}

// Problem 15
// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.{6,})/.test(password);
}

// Problem 16
// The main idea is to count all the occuring characters(UTF - 8) in string.If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
  if (string === '') {
    return {}
  } else {
    let alphas = string.split('').reduce((alphas, letter) => {
      if (!alphas[letter]) {
        alphas[letter] = 0
      }
      alphas[letter]++
      return alphas
    }, {})
    return alphas
  }
}

// Problem 17
// You are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.
// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
  const splitString = text.split('')
  const numText = splitString.reduce((numText, letter, index) => {
    if (!alphaData[letter.toLowerCase()]) {
      return numText
    }
    if (!numText.length) {
      return numText + alphaData[letter.toLowerCase()]
    }
    return numText + " " + alphaData[letter.toLowerCase()]
  }, "")
  return numText;
}

const alphaData = { a: "1", b: "2", c: "3", d: "4", e: "5", f: "6", g: "7", h: "8", i: "9", j: "10", k: "11", l: "12", m: "13", n: "14", o: "15", p: "16", q: "17", r: "18", s: "19", t: "20", u: "21", v: "22", w: "23", x: "24", y: "25", z: "26", }

// Problem 18
// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar - shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// | PQRS | | TUV | | WXYZ|
// |  7   | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | | space | |     |
// |  *  | |  0    | |  #  |
// ------- ------- -------
// Prior to the development of T9(predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times(as the screen display for the current character cycles through P -> Q -> R -> S -> 7).A character is "locked in" once the user presses a different key or pauses for a short period of time(thus, no extra button presses are required beyond what is needed for each letter individually).The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses.No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase.Punctuation can be ignored for this exercise.Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

const message = "WHERE DO U WANT 2 MEET L8R"

const keyPresses = (string) => {
  const splitString = string.split("")
  const presses = splitString.reduce((presses, letter) => {
    keyboard.forEach(key => {
      if (key.includes(letter.toLowerCase())) {
        presses += key.indexOf(letter.toLowerCase()) + 1
      }
    })
    return presses
  }, 0)
  return presses
}

const keyboard = [["1"], ["a", "b", "c", "2"], ["d", "e", "f", "3"], ["g", "h", "i", "4"], ["j", "k", "l", "5"], ["m", "n", "o", "6"], ["p", "q", "r", "s", "7"], ["t", "u", "v", "8"], ["w", "x", "y", "z", "9"], ["*"], [" ", "0"], ["#"]]

keyPresses(message)

// Problem 19
// Create the function prefill that returns an array of n elements that all have the same value v.

// You have to validate input:
// v can be anything(primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer - formatted string(e.g. '123') that is >= 0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(num, value) {
  let realNum = parseInt(num)
  let returnArray = []
  if (realNum === 0) {
    return []
  }
  if (!value) {
    value = undefined;
  }
  if (!realNum || realNum < 0 || /(?=.*[\.])/.test(num)) {
    throw new TypeError(`${num} is invalid`);
  }
  for (let i = 0; i < num; i++) {
    returnArray.push(value)
  }
  return returnArray
}