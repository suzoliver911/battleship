export class Ship {
  private _hits: number = 0;
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  public hits() {
    return this._hits;
  }

  public isDestroyed() {
    return this._hits === this.size;
  }

  public itsAHit() {
    this._hits += 1;
  }
}
