const functional = require('../index.js')

describe('Testando a função Fizzbuzz', () => {
  it('should return a array contain fizz, buzz, or fizzBuzz', () => {
    const fizzOrBuzz = functional.fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

    expect(fizzOrBuzz).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])
  })
})
