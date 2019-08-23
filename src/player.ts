import { Grid } from './grid';
export class Player {
  public id: number;

  private _grid: Grid;

  constructor(grid: Grid, id: number) {
    this._grid = grid;
    this.id = id;
  }

  public grid() {
    return this._grid;
  }
}
