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