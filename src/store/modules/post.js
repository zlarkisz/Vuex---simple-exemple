import axios from 'axios'

export default {
    actions: {
        async fetchPosts(ctx, limit=3) {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
                const posts = data;
                ctx.commit('updatePosts', posts)
            } catch (e) {
                console.log(e.message)
            }
            return Promise.resolve()
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        }
    },
}