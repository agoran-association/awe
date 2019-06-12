import AgoraRTC from 'agora-rtc-sdk'
import enhanceAgoraRTC from '../src/index';

describe('Awe Test', () => {
  const engine = enhanceAgoraRTC(AgoraRTC);
  it('Stream Promisify', async () => {
    const stream = engine.createStream({
      streamID: 12345,
      video: false,
      audio: false
    })
    await stream.init();
    expect(true);
  })

  it('Client Promisify', async () => {
    const client = engine.createClient({
      codec: 'vp8',
      mode: 'live',
    })
    await client.init('12345');
    expect(true)
  })

})