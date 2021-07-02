import Starting from './App.js';

describe('Starting', () => {
  it('should render without crashing', () => {
    const container = Starting();
    expect(container instanceof HTMLElement).toBe(true);
  });
});
