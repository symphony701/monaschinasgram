<script>
  import Poster from "./components/poster.svelte";
  import Post from "./components/posts/post.svelte";
  import AddPostDialog from "./components/addDialog/addPostDialog.svelte";
  let activeAddPost = false;
  const selectPoster = () =>{
    activeAddPost = true;
  }
  const hideAddPost = () =>{
    activeAddPost = false;
  }

  const takeNewPost = (post) =>{
    posts.push(post);
    posts=posts;
  }

  $:showedPosts = posts.reverse();


  let posts=[
    {
      user:'Nino Nakano',
      id:1,
      image:'https://source.unsplash.com/category/nature/',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      date: '2 days ago',
      likes: '10',
      comments: '2',
    },
    {
      user:'Nino Nakano',
      id:2,
      image:'https://source.unsplash.com/category/nature/',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      date: '2 days ago',
      likes: '10',
      comments: '2',
    },
    {
      user:'Nino Nakano',
      id:3,
      image:'https://source.unsplash.com/category/nature/',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      date: '2 days ago',
      likes: '10',
      comments: '2',
    },
    {
      user:'Nino Nakano',
      id:4,
      image:'https://source.unsplash.com/category/nature/',
      text: 'Final lasts for a while',
      date: '2 days ago',
      likes: '10',
      comments: '2',
    }
  ]
</script>

<div class="center">
  <Poster selectPoster={selectPoster} />
  <AddPostDialog active={activeAddPost} closeAddDialog={hideAddPost} {takeNewPost}/>
  {#each showedPosts as post (post.id)}
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
</style>
