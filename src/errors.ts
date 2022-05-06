class BaseError extends Error {
  constructor(e?: string) {
    super(e)
    this.name = new.target.name
    Object.setPrototypeOf(this, new.target.prototype)//ES 5以下のみ
  }
}

export class MyError extends BaseError {
  constructor(private retry: number, e?: string) {
    super(e)
  }
  toJson() {
    return { retry: this.retry }
  }
}