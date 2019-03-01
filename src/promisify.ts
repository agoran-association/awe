/** ==== promisify client ==== */

export function clientPromisify<AgoraClient>(client: AgoraClient): AgoraClient {
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
          case "init":
            return new Promise((resolve, reject) => {
              target(
                argumentList[0],
                (...successArgs: any[]) => {
                  argumentList[1](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[2](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "join":
            return new Promise((resolve, reject) => {
              target(
                argumentList[0],
                argumentList[1],
                argumentList[2],
                (...successArgs: any[]) => {
                  argumentList[3](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[4](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "leave":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "publish":
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], (...errArgs: any[]) => {
                argumentList[1](errArgs);
                reject(errArgs);
              });
            });
          case "subscribe":
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], argumentList[1], (...errArgs: any[]) => {
                argumentList[2](errArgs);
                reject(errArgs);
              });
            });
          case "unpublish":
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], (...errArgs: any[]) => {
                argumentList[1](errArgs);
                reject(errArgs);
              });
            });
          case "unsubscribe":
            return new Promise((resolve, reject) => {
              setTimeout(resolve);
              target(argumentList[0], (...errArgs: any[]) => {
                argumentList[1](errArgs);
                reject(errArgs);
              });
            });
          case "enableDualStream":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getCameras":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getLocalAudioStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getLocalVideoStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getNetworkStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getPlayoutDevices":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getRecordingDevices":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getRemoteAudioStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getRemoteVideoStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getSystemStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getTransportStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
        }
      }
    };
  };

  return new Proxy(client, handler);
}

/** ==== promisify stream ==== */

export function streamPromisify<AgoraStream>(stream: AgoraStream): AgoraStream {
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
          case "init":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
          case "getStats":
            return new Promise((resolve, reject) => {
              target(
                (...successArgs: any[]) => {
                  argumentList[0](successArgs);
                  resolve(successArgs);
                },
                (...errArgs: any[]) => {
                  argumentList[1](errArgs);
                  reject(errArgs);
                }
              );
            });
        }
      }
    };
  };

  return new Proxy(stream, handler);
}
