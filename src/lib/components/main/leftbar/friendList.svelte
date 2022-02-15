<script>
  import FriendItemList from "./friendItemList.svelte";

  const friends = [
    {
      name: "John Cena",
      image: "https://c.tenor.com/IMNDZBkct8gAAAAC/anime-girl.gif",
      state: "Online",
    },

    {
      name: "Nino Nakano",
      image:
        "https://i.pinimg.com/originals/5c/dd/df/5cdddfde3398f513a59c07cc298247c2.jpg",
      state: "Offline",
    },
    {
      name: "Futaba Rio",
      image:
        "https://i.pinimg.com/originals/a9/8c/fc/a98cfc1ec60ff8d2532d4324382fe4f2.jpg",
      state: "Online",
    },
    {
      name: "Zero Two",
      image:
        "https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg",
      state: "Offline",
    },
  ];
</script>

<div class="frindList">
  <h4>YOUR TOMODACHI</h4>
  <div class="frindContainer">
    {#each friends as friend}
      <FriendItemList {friend} />
    {/each}
  </div>
</div>

<style>
  .frindList {
    background-color: #f5f5f5;
    padding: 10px 0px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 20px);
    align-items: center;
  }
  h4 {
    color: #080840;
  }
  .frindContainer {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    overflow-y: auto;
    height: 207px;
  }
  .frindContainer::-webkit-scrollbar {
    width: 8px;
    background-color: #9debcc;
    border-radius: 5px;
  }
  .frindContainer::-webkit-scrollbar-thumb {
    background-color: #1b1e2a;
    border-radius: 5px;
    width: 5px;
  }
</style>
