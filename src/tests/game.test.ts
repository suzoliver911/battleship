import { Game } from '../game';
import { Grid } from '../grid';
import { Player } from '../player';

describe('Game Play', () => {
  let p1: Player;
  let p2: Player;
  let game: Game;

  beforeEach(() => {
    p1 = new Player(new Grid(), 1);
    p2 = new Player(new Grid(), 2);

    game = new Game([p1, p2]);
  });

  test('P1 is active', () => {
    expect(game.activePlayer().id).toBe(p1.id);
  });

  test('P2 is inactive', () => {
    expect(game.inactivePlayer().id).toBe(p2.id);
  });

  test('player fires shot and active player changes', () => {
    game.fireShot(2, 4);
    expect(game.activePlayer().id).toBe(p2.id);
  });

  test('player fires shot and inactive player changes', () => {
    game.fireShot(6, 9);
    expect(game.inactivePlayer().id).toBe(p1.id);
  });

  test('fire shot calls inactive players grid shotFired', () => {
    const spy = jest.spyOn(game.inactivePlayer().grid(), 'shotFired');
    game.fireShot(3, 4);
    expect(spy).toBeCalledTimes(1);
  });
});
