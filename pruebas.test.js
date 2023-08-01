const suma = require('./funciones/suma.js');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

const resta = require('./funciones/resta.js');

test('restar 5 - 2 es igual a 3', () => {
  expect(resta(2, 5)).toBe(-3);
});

const multi = require('./funciones/multiplicacion.js');

test('multiplicar 5 - 5 es igual a 25', () => {
  expect(multi(5, 5)).toBe(25);
});

const division = require('./funciones/division.js');

test('dividir 50 / 5 es igual a 10', () => {
  expect(division(50, 5)).toBe(10);
});

const promedio = require('./funciones/promedio.js');

test('promedio de (5, 5) es 5', () => {
  expect(promedio(5, 5, 2)).toBe(5);
});

const edad = require('./funciones/edad.js');

test('si es mayor de edad retorna true', () => {
  expect(edad(19)).toBe(true);
});

const contraseña = require('./funciones/contraseña.js');

test('si la contraseña es correcta retorna true', () => {
  expect(contraseña(12345)).toBe(true);
});

const areat = require('./funciones/areat.js');

test('el area del triangulo es 8', () => {
  expect(areat(4, 4)).toBe(8);
});

const par = require('./funciones/par.js');

test('el numero debe ser par', () => {
  expect(par(10)).toBe(true);
});

const negativo = require('./funciones/negativo.js');

test('el numero debe ser negativo', () => {
  expect(negativo(-3)).toBe(true);
});