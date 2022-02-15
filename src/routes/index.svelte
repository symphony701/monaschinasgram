<script>
  import { loggedUser } from "$lib/components/stores/GeneralStore";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import Navbar from "../lib/components/main/navbar/navbar.svelte";
  import Sidebar from "$lib/components/main/sidebar/sidebar.svelte";
  import Leftbar from "$lib/components/main/leftbar/leftbar.svelte";
  import Center from "$lib/components/main/center/center.svelte";
  onMount(() => {
    if ($loggedUser === null) {
      goto("/signin");
    }
  });
</script>

<svelte:head>
  <title>Weebgram</title>
</svelte:head>
{#if $loggedUser !== null}
  <div class="main">
    <Navbar />
    <div class="content">
      <Sidebar />
      <Center />
      <Leftbar />
    </div>
  </div>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
  .main {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
  .content {
    max-width: 100%;
    min-width: 100%;
    height: calc(100vh - 1px - 3.5rem);
    display: flex;
    background: #f0f2f5;
  }
  
</style>
