import { theme } from '../theme';

describe('Theme', () => {
  it('should contain proper color structure', () => {
    expect(theme.colors).toEqual(
      expect.objectContaining({
        black: expect.any(String),
        grey1: expect.any(String),
      })
    );
  });
});
