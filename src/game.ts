import { Grid } from './grid';
import { Player } from './player';

export class Game {
  private _activePlayer: Player;
  private _inactivePlayer: Player;

  constructor(players: Player[]) {
    this._activePlayer = players[0];
    this._inactivePlayer = players[1];
  }

  public activePlayer() {
    return this._activePlayer;
  }
  public inactivePlayer() {
    return this._inactivePlayer;
  }
  public fireShot(x: number, y: number) {
    this._inactivePlayer.grid().shotFired(x, y);
    this.swapPlayers();
  }

  private swapPlayers() {
    const swapPlayer = this._activePlayer;
    this._activePlayer = this._inactivePlayer;
    this._inactivePlayer = swapPlayer;
  }
}
