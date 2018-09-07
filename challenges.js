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