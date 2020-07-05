<template>
  <div>
    <h1>東京ビッグサイトだよー</h1>
    <video :ref="boothId" width="400px" autoplay playsinline></video>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Peer from 'skyway-js'
import { SetUpVideo } from '../../modules/video/SetUpVideo'
import { GetPeerClient } from '../../modules/rtc/PeerClient'
import { GetCalling } from '../../modules/rtc/GetCalling'

export default Vue.extend({
  data() {
    return {
      boothId: 'boothId',
      localStream: null as MediaStream | null,
      peer: null as null | Peer
    }
  },
  async mounted() {
    const localVideo = this.$refs[this.boothId] as HTMLMediaElement
    this.localStream = await SetUpVideo(localVideo)

    GetPeerClient((peer: Peer) => {
      GetCalling(peer, this.localStream!, localVideo)
    })
  }
})
</script>
