import { greet } from './greet';

describe('greet', () => {
  it('should return phrase with passed name', () => {
    const name = 'John';
    const result = greet(name);

    expect(result).toContain(name);
  });
});
