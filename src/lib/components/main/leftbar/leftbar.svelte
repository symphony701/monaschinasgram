<script>
  import Fa from "svelte-fa";
  import {
    faUserCircle,
    faStar,
    faBullhorn,
    faSlidersH,
  } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="sidebar">
    
  <ul>
    <li><div class="icon"><Fa icon={faUserCircle} /></div> Profile</li>
    <li><div class="icon"><Fa icon={faBullhorn} /></div>Top Anime</li>
    <li><div class="icon"><Fa icon={faStar} /></div>Top Discussions</li>
    <li><div class="icon"><Fa icon={faSlidersH} /></div>Settings</li>
  </ul>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
  .sidebar {
    width: calc(15rem - 1px);
    height: 100%;
    background-color: transparent;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }
  li {
    padding: 0.5rem;
    margin: 0.5rem;
    background: transparent;
    border-radius: 0.5rem;
    height: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #ff4545;
    font-weight: 600;
  }
  li:hover {
    background-color: #ff4545;
    color: #fff;
  }
  .icon{
    font-size: 1rem;
    margin-right: 1rem;
  }
</style>
