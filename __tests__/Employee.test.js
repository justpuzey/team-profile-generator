const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates Employee Object', () => {
  const employee = new Employee();

  expect(typeof (employee)).toBe("object");
});

test('Set name parameter in Employee object', () => {
  const test = 'Justin'
  const employee = new Employee(test);

  expect(employee.name).toBe(test);
});

test('Set ID parameter in Employee object', () => {
  const test = 213
  const employee = new Employee('justin', test);

  expect(employee.id).toBe(test);
});

test('Set email parameter in Employee object', () => {
  const test = 'fake@fake.com'
  const employee = new Employee('justin', 123, test);

  expect(employee.email).toBe(test);
});

test('Retrieve name via getName() method', () => {
  const test = 'justin'
  const employee = new Employee(test);

  expect(employee.getName()).toBe(test);
});

test('Retrieve ID via getId() method', () => {
  const test = 123
  const employee = new Employee('justin', test);

  expect(employee.getId()).toBe(test);
});

test('Retrieve email via getEmail() method', () => {
  const test = 'fake@fake.com'
  const employee = new Employee('justin', 1234, test);

  expect(employee.getEmail()).toBe(test);
});

test('Retrieve role via getRole() method', () => {
  const test = 'Employee'
  const employee = new Employee('justin', 1234, 'fake@fake.com');

  expect(employee.getRole()).toBe(test);
});