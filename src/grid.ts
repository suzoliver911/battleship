import { Ship } from './ship';

export class Grid {
  private GRIDSIZE = 10;
  private _shots: number[][];
  constructor() {
    this._shots = new Array(this.GRIDSIZE).fill(0).map(() => new Array(this.GRIDSIZE).fill(0));
  }

  public shots() {
    return this._shots;
  }

  public shotFired(x: number, y: number) {
    this._shots[x][y] = 1;
  }
}
