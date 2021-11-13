const app = Vue.createApp({
  data() {
    return {
      show: true,
      firstName: "Shin",
      lastName: "Wang",
      gender: "male",
      email: "shinwang@ufinity.com",
      picture: "https://randomuser.me/api/portraits/men/29.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log("show me the data", results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.gender = results[0].email;
      this.email = results[0].gender;
      this.picture = results[0].picture.large;
    },

    toggle() {
      this.show = !this.show;
    },
  },
});

app.mount("#app");
