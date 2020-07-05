import Peer, { MediaConnection } from 'skyway-js'
import { setEventListener } from './CallToClient'
export const GetCalling = (
  peer: Peer,
  localStream: MediaStream,
  localVideo: HTMLMediaElement
) => {
  peer.on('call', (mediaConnection: MediaConnection) => {
    mediaConnection.answer(localStream)
    setEventListener(mediaConnection, localVideo)
  })
}
