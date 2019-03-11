/**
 * Import enhancers and do proxy
 */

import enhance from './enhance';
import {promisifyClient, promisifyStream} from './promisify'

const enhanceClient = (client: AgoraClient) => {
  return enhance<AgoraClient>(client, [promisifyClient]);
}

const enhanceStream = (stream: AgoraStream) => {
  return enhance<AgoraStream>(stream, [promisifyStream]);
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

const enhanceAgoraRTC = (AgoraRTC: AgoraRTC) => {
  return enhance<AgoraRTC>(AgoraRTC, [AgoraRTCEnhancer]);
}

export default enhanceAgoraRTC;

