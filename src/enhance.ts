/**
 * Proxy methods for original object (Client, Stream, AgoraRTC) 
 * in Agora Web SDK.
 */
import AgoraRTC from 'agora-rtc-sdk'
import {Enhancer} from './type'

type Subject = AgoraRTC.Stream | AgoraRTC.Client | typeof AgoraRTC

function enhance(subject: Subject, methodEnhancers: Enhancer[]) {
  const handler = {
    get(target: any, prop: string, receiver: any) {
      const origin = Reflect.get(target, prop, receiver);
      if (origin instanceof Function) {
        return new Proxy(origin, methodsProxyHandler(prop));
      }
      return origin;
    }
  };

  const methodsProxyHandler = (methodName: string) => {
    return {
      apply(target: any, thisArg: any, argumentList: any[]) {
        for(const func of methodEnhancers) {
          return func(methodName, {target, thisArg, argumentList})
        }
      }
    }
  };

  const result = new Proxy(subject, handler);
  return result;
}

export default enhance;