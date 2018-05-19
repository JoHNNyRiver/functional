/**
 * ==================================== ######### ==========================
 *
 * @author João Ribeiro
 * @copyright 2018
 * @description prime é uma função responsavel de retirna uma string dizendo
 * que o número que recebe como parametro é orimo ou não
 *
 * ==================================== ######### ==========================
 */

/**
 * splitNumber é responsavel em quebrar o numero recebido como parametro e retirn um array decrescente até 1
 * @param  {Number} n
 * @param  {Array}  arr
 * @return {Array}
 */
const splitNumber = (n, arr = []) => n > 0 ? arr.push(n) && splitNumber(n - 1, arr) : arr

/**
 * filterNumber filtra todos os numeros do array e verifica se o  odulo é 0 compardo com o numero passado
 * @param  {Array} arr
 * @param  {Number} n
 * @return {Array}
 */
const filterNumber = (arr, n) => arr.filter(items => n % items === 0)

/**
 * Responsavel por retornar um array contendo os números filtrados
 * @param  {Number} n
 * @return {Array}
 */
const totalPrime = n => filterNumber(splitNumber(n), n)

/**
 * Responsavel por dizer se o total do array retirnado de totalPrime é maior que dois
 * @param  {Number} n
 * @return {Boolean}
 */
const isPrime = n => totalPrime(n).length === 2

/**
 * Retornará uma string com as posiveis frases (`O número ${n} é primo` : `O número ${n} não é primo`)
 * @param  {Number} n
 * @return {String}
 */
const prime = n => isPrime(n) ? `O número ${n} é primo` : `O número ${n} não é primo`

/**
 * Exportando o module
 * @type {Function}
 */
module.exports = prime
