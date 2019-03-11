# AWE

> Agora WebSDK Enhancer

## Quick Start

```
npm install agora-rtc-sdk awe
```

```
import enhanceAgoraRTC from 'awe';
import AgoraRTC from 'agora-rtc-sdk';

const engine = enhanceAgoraRTC(AgoraRTC)
const stream = engine.createStream({streamID: 123, audio: true, video: true})
stream.init().then(() => console.log('onSuccess')).catch(() => console.error('onFailure'))

```