export type Enhancer = (methodName: string, options: {
  target: (...args: any[]) => any,
  thisArg: any,
  argumentList: any[]
}) => any