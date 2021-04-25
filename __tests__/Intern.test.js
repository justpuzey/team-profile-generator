const Intern = require("../lib/Intern");

test('Set school parameter in Intern Class', () => {
  const test = 'UCF';
  const intern = new Intern('justin', 1234, 'fake@fake.com', test);
  expect(intern.school).toBe(test);
});

test("Retrieve overridden role 'Intern' via getRole() method", () => {
  const test = "Intern";
  const intern = new Intern('justin', 1234, 'fake@fake.com', 'UCF');
  expect(intern.getRole()).toBe(test);
});

test('Retrieve school via getSchool() method', () => {
  const test = 'UCF';
  const intern = new Intern('justin', 1234, 'fake@fake.com', test);
  expect(intern.getSchool()).toBe(test);
});