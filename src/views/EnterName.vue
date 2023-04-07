<template>
  <div>
    <h1>输入用户名</h1>
    <input v-model="username" placeholder="请输入用户名" />
    <button @click="joinRoom">进入估点</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    joinRoom() {
      sessionStorage.setItem('username', this.username);

      const roomid = this.$route.params.roomid;
      let users = JSON.parse(localStorage.getItem(`room-${roomid}`)) || [];
      users.push({ username: this.username, point: null });
      localStorage.setItem(`room-${roomid}`, JSON.stringify(users));

      this.$router.push(`/${roomid}/estimation`);
    },
  },
};
</script>