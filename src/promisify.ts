export const promisifyClientMiddleware = (client: any) => {
  // declare handler for proxy
  const handler = {
    get(target: any, prop: string, receiver: any) {
      const origin = Reflect.get(target, prop, receiver);
      if (origin instanceof Function) {
        return new Proxy(origin, methodsProxyHandler(prop));
      }
      return origin;
    }
  };

  const methodsProxyHandler = (prop: string) => {
    return {
      apply(target: any, thisArg: any, argumentList: any[]) {
        switch (prop) {
          default:
            return target(...argumentList);
          case 'init':
            return new Promise((resolve, reject) => {
              target(argumentList[0], resolve, reject);
            });
          case 'join':
            return new Promise((resolve, reject) => {
              target(
                argumentList[0],
                argumentList[1],
                argumentList[2],
                resolve,
                reject
              );
            });
          case 'leave':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'publish':
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], reject);
            });
          case 'subscribe':
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], reject);
            });
          case 'unpublish':
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], reject);
            });
          case 'unsubscribe':
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], reject);
            });
          case 'enableDualStream':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getCameras':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getLocalAudioStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getLocalVideoStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getNetworkStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getPlayoutDevices':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getRecordingDevices':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getRemoteAudioStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getRemoteVideoStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getSystemStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
          case 'getTransportStats':
            return new Promise((resolve, reject) => {
              target(resolve, reject);
            });
        }
      }
    };
  };

  // do proxy
  return new Proxy(client, handler);
};