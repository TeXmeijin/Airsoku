<template>
  <div>
    <h1>東京ビッグサイトだよー</h1>
    <video :ref="boothId" width="400px" autoplay playsinline></video>
    <input
      id=""
      v-model="peerIdField"
      type="text"
      name=""
      @change="handleChangePeerId"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Peer from 'skyway-js'
import { SetUpVideo } from '../../modules/video/SetUpVideo'
import { GetPeerClient } from '../../modules/rtc/PeerClient'
import { CallToClient } from '../../modules/rtc/CallToClient'

export default Vue.extend({
  data() {
    return {
      boothId: 'boothId',
      localStream: null as MediaStream | null,
      peer: null as null | Peer,
      peerIdField: ''
    }
  },
  async mounted() {
    const localVideo = this.$refs[this.boothId] as HTMLMediaElement
    this.localStream = await SetUpVideo(localVideo, false)

    this.peer = GetPeerClient((_: Peer) => {})
  },
  methods: {
    handleChangePeerId() {
      const localVideo = this.$refs[this.boothId] as HTMLMediaElement

      CallToClient(this.peer!, this.peerIdField, this.localStream!, localVideo)
    }
  }
})
</script>
