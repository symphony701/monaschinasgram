<script>
  import Fa from "svelte-fa";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="search">
  <div class="icon">
    <Fa icon={faSearch} />
  </div>
  <input type="text" />
</div>

<style>
  .search {
    border: 1px solid #008288;
    color: black;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: auto;
  }
  .icon{
      cursor: pointer;
      color: #008288;
  }
  input {
    width: 10rem;
    background: none;
    border: none;
    border-bottom: 1px solid #008288;
    margin: 0px 15px;
    color: black;
  }
  input:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #008288;
  }
</style>
