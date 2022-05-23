// TODO: Write your function in this file
function createFizzBuzzArray(lower, upper) {
    const fizzBuzzArray = []
  
    for (let i = lower; i <= upper; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push('FizzBuzz')
        } else if (i % 3 === 0) {
            fizzBuzzArray.push('Fizz')
        } else if (i % 5 === 0) {
            fizzBuzzArray.push('Buzz')
        } else {
            fizzBuzzArray.push(i)
        }
    }
    
    return fizzBuzzArray
  }
  console.log(createFizzBuzzArray(1, 50))
// TODO: Change undefined below to the name of your function
module.exports = createFizzBuzzArray
