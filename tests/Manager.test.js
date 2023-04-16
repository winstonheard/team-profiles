const Manager = require('../lib/Manager');

describe('Manager', () => {
  test('Can set office number via constructor arguments', () => {
    const testValue = 100;
    const e = new Manager('Alice', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager('Alice', 1, 'test@test.com', 100);
    expect(e.getRole()).toBe(testValue);
  });

  test('Can get office number via getOfficeNumber()', () => {
    const testValue = 100;
    const e = new Manager('Alice', 1, 'test@test.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
});
