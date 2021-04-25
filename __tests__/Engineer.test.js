const Engineer = require('../lib/Engineer');

test('Set GitHub username parameter in Engineer Class', () => {
  const test = "GitHubUser";
  const engineer = new Engineer('justin', 1234, 'fake@fake.com', test);
  expect(engineer.github).toBe(test);
});

test('Retrieve GitHub username via getGithub() method', () => {
  const test = "GitHubUser";
  const engineer = new Engineer('justin', 1234, 'fake@fake.com', test);
  expect(engineer.getGithub()).toBe(test);
});

test("Retrieve overridden role 'Engineer' via getRole() method", () => {
  const test = "Engineer";
  const engineer = new Engineer('justin', 1234, 'fake@fake.com', 'GitHubUser');
  expect(engineer.getRole()).toBe(test);
});
