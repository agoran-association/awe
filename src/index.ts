/**
 * Import enhancers and do proxy
 */
import AgoraRTC, { ClientConfig } from 'agora-rtc-sdk'
import enhance from './enhance';
import {IClientWithPromise, IStreamWithPromise, promisifyClient, promisifyStream } from './promisify'
import {Enhancer} from './type'

const enhanceClient = (client: AgoraRTC.Client): IClientWithPromise => {
  return enhance(client, [promisifyClient]);
}

const enhanceStream = (stream: AgoraRTC.Stream): IStreamWithPromise => {
  return enhance(stream, [promisifyStream]);
}

const AgoraRTCEnhancer: Enhancer = (methodName, options) => {
  const {target, argumentList} = options;
  switch (methodName) {
    default:
      return target(...argumentList);
    case "createClient":
      return enhanceClient(target(...argumentList));
    case "createStream":
      return enhanceStream(target(...argumentList));
  }
}

type IEngine = typeof AgoraRTC

interface IEngineWithPromise extends IEngine {
  createClient: (config: AgoraRTC.ClientConfig) => IClientWithPromise
  createStream: (spec: AgoraRTC.StreamSpec) => IStreamWithPromise
}

const enhanceAgoraRTC = (rtcEngine: typeof AgoraRTC): IEngineWithPromise => {
  return enhance(rtcEngine, [AgoraRTCEnhancer]);
}

export default enhanceAgoraRTC;

