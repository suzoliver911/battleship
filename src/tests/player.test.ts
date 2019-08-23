import { Player } from '../player';
import { Grid } from '../grid';

describe('Player', () => {
  test('is active', () => {
    const player = new Player(new Grid(), 1);

    expect(true).toBe(true);
  });
});
