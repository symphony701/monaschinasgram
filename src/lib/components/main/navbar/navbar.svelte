<script>
  import ProfileIcon from "./profileIcon.svelte";
  import Search from "./search.svelte";
</script>

<navbar>
  <h1>MonasChinasgram</h1>
  <Search />
  <div class="profile">
    <ProfileIcon />
  </div>
</navbar>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap");
  h1 {
    color: #00aaa9;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-family: "Pacifico", cursive;
    margin-left: 30px;
  }
  navbar {
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #008288;
  }
  .profile {
    margin-right: 30px;
  }
</style>
