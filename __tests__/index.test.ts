import enhanceAgoraRTC from '../src/index';
import mockEngine from './mock';

describe('Awe Test', () => {
  const engine = enhanceAgoraRTC(mockEngine);
  it('Stream Promisify', async () => {
    const stream = engine.createStream()
    await stream.init();
    expect(true);
  })

  it('Client Promisify', async () => {
    const client = engine.createClient({
      codec: 'vp8',
      mode: 'live',
    })
    await client.init('agora');
    expect(client.appId).toBe('agora')
    expect(client.mode).toBe('live')
  })

})