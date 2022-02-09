<script>
  import FriendList from "./friendList.svelte";
</script>

<div class="leftbar"> 
  <FriendList />
</div>
<style>
  
  .leftbar {
    width: calc(20rem - 1px);
    max-width: calc(20rem - 1px);
    height: 100%;
    background-color: transparent;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
