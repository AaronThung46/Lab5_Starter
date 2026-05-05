// unit.test.js

import * as functions from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber true 1', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber true 2', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber false 1', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber false 2', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});

// isEmail
test('isEmail true 1', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});
test('isEmail true 2', () => {
  expect(functions.isEmail('user_123@ucsd.edu')).toBe(true);
});
test('isEmail false 1', () => {
  expect(functions.isEmail('test@example')).toBe(false);
});
test('isEmail false 2', () => {
  expect(functions.isEmail('@example.com')).toBe(false);
});

// isStrongPassword
test('isStrongPassword true 1', () => {
  expect(functions.isStrongPassword('abcd123')).toBe(true);
});
test('isStrongPassword true 2', () => {
  expect(functions.isStrongPassword('A1234567890_123')).toBe(true);
});
test('isStrongPassword false 1', () => {
  expect(functions.isStrongPassword('1abc')).toBe(false);
});
test('isStrongPassword false 2', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate true 1', () => {
  expect(functions.isDate('05/04/2026')).toBe(true);
});
test('isDate true 2', () => {
  expect(functions.isDate('5/4/2026')).toBe(true);
});
test('isDate false 1', () => {
  expect(functions.isDate('05/04/26')).toBe(false);
});
test('isDate false 2', () => {
  expect(functions.isDate('May 4, 2026')).toBe(false);
});

// isHexColor
test('isHexColor true 1', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});
test('isHexColor true 2', () => {
  expect(functions.isHexColor('00FF00')).toBe(true);
});
test('isHexColor false 1', () => {
  expect(functions.isHexColor('#G12345')).toBe(false);
});
test('isHexColor false 2', () => {
  expect(functions.isHexColor('12')).toBe(false);
});
