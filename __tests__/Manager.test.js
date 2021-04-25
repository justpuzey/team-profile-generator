const Manager = require("../lib/Manager");

test('Set office number parameter in Manager Class', () => {
  const test = 801;
  const manager = new Manager('justin', 1234, 'fake@fake.com', test);
  expect(manager.officeNumber).toBe(test);
});

test("Retrieve overridden role 'Manager' via getRole() method", () => {
  const test = "Manager";
  const manager = new Manager('justin', 1234, 'fake@fake.com', 801);
  expect(manager.getRole()).toBe(test);
});

test("Retrieve office number via getOffice() method", () => {
  const test = 801;
  const manager = new Manager('justin', 1234, 'fake@fake.com', test);
  expect(manager.getOfficeNumber()).toBe(test);
});