/**
 * ==================================== ######### ==========================
 *
 * @author João Ribeiro
 * @copyright 2018
 * @description FizzBuzz é um algoritmo comum em entrevistas de emprego, onde se recebe um determinado valor
 * [array] e itera sobre os valores retornando fizz se for divisivel por 3, buzz se for divisivel por 5
 * fizbuzz se for divisivel por 3 e 5.
 *
 * ==================================== ######### ==========================
 */

/**
 * Responsavel por mapear cada item do array passado como parametro
 * @param  {Array} arr
 * @return {Array}
 */
const map = arr => arr.map(items => isFizzBuzz(items))

/**
 * Reponsavel por fazer o calculo da lógica fizzbuzz e retornar fizz, buzz, fizzBuzz ou o numero iterado
 * @param  {Number} n
 * @return {String}
 */
const isFizzBuzz = n => n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n

/**
 * Função principal recebe um array de inteiros como parametro e retorna outro array com os valores desejados
 * @param  {Array} arr
 * @return {Array}
 */
const fizzBuzz = arr => map(arr)

/**
 * Exportando o modulo
 * @type {Function}
 */
module.exports = fizzBuzz
