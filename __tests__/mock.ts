class MockClient  {
  public mode: string
  public codec: string
  public appId: string
  constructor(mode: string, codec: string) {
    this.mode = mode;
    this.codec = codec;
    this.appId = '';
  }
  public init(appId: string, onSuccess?: () => void, onError?: (err: any) => void) {
    this.appId = appId;
    setTimeout(() => {
      return onSuccess && onSuccess()
    }, 1000)
  }
  [props: string]: any
}

class MockStream  {
  public init(onSuccess?: () => void, onError?: (err: any) => void) {
    setTimeout(() => {
      return onSuccess && onSuccess()
    }, 1000)
  }
  [props: string]: any
}

const mockEngine = {
  createClient(options: {mode: string, codec: string}) {
    return new MockClient(options.mode, options.codec)
  },

  createStream() {
    return new MockStream()
  }
}

export default mockEngine;