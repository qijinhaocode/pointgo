<template>
  <div>
    <h1>首页</h1>
    <input v-model="roomid" placeholder="请输入房间号" />
    <button @click="joinRoom">加入房间</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomid: '',
    };
  },
  methods: {
    joinRoom() {
      sessionStorage.setItem('roomid', this.roomid);
      this.$router.push(`/${this.roomid}`);
    },
  },
};
</script>
