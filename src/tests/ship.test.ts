import { Ship } from '../ship';

test('ship is not destroyed', () => {
  const ship = new Ship(2);
  expect(ship.isDestroyed()).toBe(false);
});

test('ship is destroyed', () => {
  const ship = new Ship(1);
  ship.itsAHit();
  expect(ship.isDestroyed()).toBe(true);
});

test('ship has been hit', () => {
  const ship = new Ship(3);
  ship.itsAHit();
  expect(ship.hits()).toBe(1);
});
