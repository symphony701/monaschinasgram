<script>
  import ProfileIcon from "./profileIcon.svelte";
  import Search from "./search.svelte";
  import Fa from "svelte-fa";
  import {
    faHeart,
    faComment
  } from "@fortawesome/free-solid-svg-icons";
</script>

<navbar>
  <h1>Weebgram</h1>
  <Search />
  <div class="profile">
    <Fa icon={faHeart} />
    <Fa icon={faComment} />
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
    margin-left: 15%;
    cursor: pointer;
  }
  navbar {
    height: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 130, 136, 0.19) 0px 0px 15px, rgba(0, 130, 136, 0.1) 0px 6px 6px;
    position: relative;
    z-index: 1;
  }
  .profile {
    margin-right: 30px;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    width: 9rem;
    justify-content: space-between;
    color: #00aaa9;
  }
</style>
