const functional = require('../index.js')

describe('Testando a função primo', () => {
  it('should return `O número 17 é primo`', done => {
    const prime = functional.prime(17)

    expect(prime).toEqual('O número 17 é primo')

    done()
  })

  it('should return `O número 10 não é primo`', done => {
    const prime = functional.prime(10)

    expect(prime).toEqual('O número 10 não é primo')

    done()
  })
})
