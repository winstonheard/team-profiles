const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  test('Can set GitHub account via constructor arguments', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Alice', 1, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
  });

  test('getRole() should return "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Alice', 1, 'test@test.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get GitHub username via getGithub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Alice', 1, 'test@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
  });
});
