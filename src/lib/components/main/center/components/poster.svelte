<script>
    import ProfileIcon from '$lib/components/main/navbar/profileIcon.svelte';
    import Fa from "svelte-fa";
    import { faImages } from "@fortawesome/free-solid-svg-icons";
</script>

<div>
    <ProfileIcon />
    <input type="text" placeholder="What does your waifu say to your heart?" >
    <Fa icon={faImages} />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
    div{
        display: flex;
        align-items: center;
        width: 60%;
        justify-content: space-around;
        border-radius: 10px;
        margin-top: 2rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        background-color: white;
        padding: 10px 0px;
        font-size: 1.5rem;
        color: #008288;
    }
    input{
        width: 70%;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 0px;
        border-bottom: 1px solid rgba(65, 65, 65, 0.61);
    }
</style>