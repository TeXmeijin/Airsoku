<template>
  <div>
    <h1>こちらはブースだよー</h1>
    <video :ref="boothId" width="400px" autoplay playsinline></video>
    <div>
      <span v-if="peer">{{ peer.id }}</span>
    </div>
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
      this.peer = peer
      GetCalling(peer, this.localStream!, localVideo)
    })
  }
})
</script>
