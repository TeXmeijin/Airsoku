export const SetUpVideo = async (
  localVideo: HTMLMediaElement,
  muted: boolean = true
): Promise<MediaStream> => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  })

  localVideo.muted = muted
  localVideo.srcObject = localStream
  await localVideo.play()

  return localStream
}
