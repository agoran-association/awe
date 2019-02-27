export default class Middleware {
  middlewares: any[];

  constructor(middlewares: any[] = []) {
    this.middlewares = middlewares;
  }

  next(current: number, ...args: any[]): any {
    let middleware = this.middlewares[current];
    let next = this.next.bind(this, ++current);

    if (typeof middleware !== "function") return middleware;

    return middleware(...args, next);
  }

  resolve(...args: any[]): any {
    return this.next(0, ...args);
  }

  use(middleware: any): this {
    let middlewares = this.middlewares.slice();
    middlewares.push(middleware);

    this.middlewares = middlewares;
    return this;
  }
}
