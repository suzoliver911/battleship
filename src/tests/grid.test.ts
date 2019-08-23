import { Grid } from '../grid';

test('shot fired on grid', () => {
  const grid = new Grid();
  grid.shotFired(2, 3);
  expect(grid.shots()[2][3]).toBe(1);
});
