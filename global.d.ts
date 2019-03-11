declare module 'agora-rtc-sdk' {
  const AgoraRTC: AgoraRTC;
  export default AgoraRTC;
}

declare type Enhancer = (methodName: string, options: {
  target: Function,
  thisArg: any,
  argumentList: any[]
}) => any

declare type AgoraClient = any

declare type AgoraStream = any

declare type AgoraRTC = any