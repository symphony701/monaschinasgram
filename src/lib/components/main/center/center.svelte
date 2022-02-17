<script>
  import axios from "axios";
  import { onMount } from 'svelte';
  import Poster from "./components/poster.svelte";
  import Post from "./components/posts/post.svelte";
  import AddPostDialog from "./components/addDialog/addPostDialog.svelte";
  let activeAddPost = false;
  const selectPoster = () => {
    activeAddPost = true;
  };
  const hideAddPost = () => {
    activeAddPost = false;
  };


  let fetchPosts = [];
  let posts = [];

  onMount(async () => {
    const response = await axios.get("http://127.0.0.1:5000/posts/getall");
    posts = response.data;
    console.log(posts);
  });






  const takeNewPost = async (posting) => {
    try {
      const add = await axios.post("http://127.0.0.1:5000/posts/add", posting);
      const response = await axios.get("http://127.0.0.1:5000/posts/getall");
      posts = response.data;
    } catch (error) {
      alert("Something went wrong");
      posts = await getData();
    }
  };

  
  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/posts/getall");
      console.log(response);
      const fetchetPosts = response.data;
      return fetchetPosts.posts;
    } catch (e) {
      console.log(e);
      alert("Something went wrong with the server =( ");
    }
  };

</script>

<div class="center">
  <Poster {selectPoster} />
  <AddPostDialog
    active={activeAddPost}
    closeAddDialog={hideAddPost}
    {takeNewPost}
  />
  
    {#each posts as post (post._id)}
      <Post data={post} />
    {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
  .center {
    width: calc(100vw - 35rem);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-bottom: 2rem;
  }
  .center::-webkit-scrollbar {
    width: 11px;
    background-color: #9debcc;
    border-radius: 5px;
  }
  .center::-webkit-scrollbar-thumb {
    background-color: #1b1e2a;
    border-radius: 5px;
    width: 10px;
  }
</style>
