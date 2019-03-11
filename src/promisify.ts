/** ==== promisify client ==== */

export const promisifyClient: Enhancer = (methodName, options) => {
  const {target, thisArg, argumentList} = options;
  switch(methodName) {
    default:
      Reflect.apply(target, thisArg, argumentList)
    case 'init':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 1), resolve, reject])
      });
    case 'join':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 3), resolve, reject])
      });
    case 'leave':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'publish':
      return new Promise((resolve, reject) => {
        setTimeout(resolve)
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 1), reject])
      });
    case 'subscribe':
      return new Promise((resolve, reject) => {
        setTimeout(resolve)
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 1), reject])
      });          
    case 'unpublish':
      return new Promise((resolve, reject) => {
        setTimeout(resolve)
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 1), reject])
      });
    case 'unsubscribe':
      return new Promise((resolve, reject) => {
        setTimeout(resolve)
        Reflect.apply(target, thisArg, [...argumentList.slice(0, 1), reject])
      });
    case 'enableDualStream':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getCameras':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getLocalAudioStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getLocalVideoStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getNetworkStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getPlayoutDevices':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getRecordingDevices':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getRemoteAudioStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getRemoteVideoStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getSystemStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getTransportStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
  }
}

export const promisifyStream: Enhancer = (methodName, options) => {
  const {target, thisArg, argumentList} = options;
  switch(methodName) {
    default:
    Reflect.apply(target, thisArg, argumentList)
    case 'init':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
    case 'getStats':
      return new Promise((resolve, reject) => {
        Reflect.apply(target, thisArg, [resolve, reject])
      });
  }
}
