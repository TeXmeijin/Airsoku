import Peer from 'skyway-js'

export const GetPeerClient = (openCallback: (peer: Peer) => void): Peer => {
  const peer = new Peer({
    key: process.env.WEBRTC_SERVICE_KEY!,
    debug: 3
  })

  peer.on('open', () => {
    openCallback(peer)
  })

  return peer
}
