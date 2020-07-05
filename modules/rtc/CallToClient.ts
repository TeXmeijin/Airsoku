import Peer, { MediaConnection } from 'skyway-js'
export const CallToClient = (
  peer: Peer,
  peerId: string,
  localStream: MediaStream,
  localVideo: HTMLMediaElement
) => {
  const mediaConnection = peer.call(peerId, localStream)

  setEventListener(mediaConnection, localVideo)
}

export const setEventListener = (
  mediaConnection: MediaConnection,
  localVideo: HTMLMediaElement
) => {
  mediaConnection.on('stream', (stream) => {
    localVideo.srcObject = stream
    localVideo.play()
  })
}
