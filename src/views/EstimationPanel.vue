<template>
  <div>
    <h1>估点页面</h1>
    <div>
      <h2>点数选择</h2>
      <button v-for="(point, index) in points" v-bind:key="index" @click="selectPoint(point)">{{ point }}</button>
    </div>
    <div>
      <h2>卡牌</h2>
      <div v-for="(user, index) in users" v-bind:key="index">
        <div>{{ user.username }}</div>
        <div>{{ show ? user.point : '?' }}</div>
      </div>
    </div>
    <div>
      <h2>显示按钮</h2>
      <button @click="show = !show">显示/隐藏</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      points: [1, 2, 3, 5, 8, 13, 21, '弃权'],
      users: [],
    };
  },
  mounted() {
    const roomid = this.$route.params.roomid;
    const users = JSON.parse(localStorage.getItem(`room-${roomid}`)) || [];
    this.users = users;
  },
  methods: {
    addUser() {
      const username = this.$route.query.username;
      this.users.push({ username, point: null });
    },
    selectPoint(point) {
      const username = sessionStorage.getItem('username');
      const userToUpdate = this.users.find((user) => user.username === username);
      if (userToUpdate) {
        userToUpdate.point = point;
        // 更新localStorage
        const roomid = this.$route.params.roomid;
        localStorage.setItem(`room-${roomid}`, JSON.stringify(this.users));
      } else {
        console.error('User not found in the list of users.');
      }
    },
  },
};
</script>