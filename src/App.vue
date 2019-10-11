<template>
  <div id="app">
    <post-form />
    <hr>
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="(post, i) in allPosts" :key="i">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm'
export default {
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components: {
      PostForm
  },
  // compited: {
  //   allPosts() {
  //     return this.$store.getters.allPosts
  //   }
  // },
  async mounted() {
    this.fetchPosts();
    // let webApiUrl = 'https://the-one-api.herokuapp.com/v1/movie';
    // let tokenStr = 'fnqrQ4Qm4DuTBMcCZSMs';
    // const res = await axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
    // this.posts = data;
    // console.log(this.posts);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
