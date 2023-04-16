const Intern = require('../lib/Intern');

describe('Intern', () => {
  test('Can set school via constructor arguments', () => {
    const testValue = 'SchoolName';
    const e = new Intern('Alice', 1, 'test@test.com', testValue);
    expect(e.school).toBe(testValue);
  });

  test('getRole() should return "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern('Alice', 1, 'test@test.com', 'SchoolName');
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get school via getSchool()', () => {
    const testValue = 'SchoolName';
    const e = new Intern('Alice', 1, 'test@test.com', testValue);
    expect(e.getSchool()).toBe(testValue);
  });
});
