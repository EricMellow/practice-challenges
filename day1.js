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