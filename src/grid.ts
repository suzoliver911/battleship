import { Ship } from './ship';

export class Grid {
  private GRIDSIZE = 10;
  private _shots: number[][];
  private _battleship: Ship;
  private _aircraftCarrier: Ship;
  private _cruiser: Ship;
  private _submarine: Ship;
  private _destroyer: Ship;

  constructor() {
    this._shots = new Array(this.GRIDSIZE).fill(0).map(() => new Array(this.GRIDSIZE).fill(0));
    this._battleship = new Ship(4);
    this._aircraftCarrier = new Ship(5);
    this._destroyer = new Ship(2);
    this._submarine = new Ship(3);
    this._cruiser = new Ship(3);
  }

  public shots() {
    return this._shots;
  }

  public shotFired(x: number, y: number) {
    this._shots[x][y] = 1;
  }
}
