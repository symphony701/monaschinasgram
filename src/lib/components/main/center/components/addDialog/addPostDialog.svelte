<script>
    import { scale } from "svelte/transition";
    import { v4 as uuidv4 } from "uuid";
    import Fa from "svelte-fa";
    import { faTimes } from "@fortawesome/free-solid-svg-icons";
    import { loggedUser } from "$lib/components/stores/GeneralStore";
    import Avatar from "./avatar.svelte";
    import TextareaPost from "./textareaPost.svelte";
    import ButtonDialog from "./buttonDialog.svelte";
    import InputImage from "./InputImage.svelte";
    export let active;
    export let closeAddDialog;
    export let takeNewPost;
    let text;
    const handleSend = () => {
        const postData = {
            user: $loggedUser.nickname,
            id: uuidv4(),
            image: $loggedUser.profile_image,
            text: text,
            date: "1 mins ago",
            likes: "0",
            comments: "0",
        };
        takeNewPost(postData);
        text = '';
    };
</script>

{#if active}
    <div class=" {active ? 'modal-container' : 'invisible'}  ">
        <div transition:scale class="modal">
            <button class="closeModal" on:click={closeAddDialog}
                ><Fa icon={faTimes} /></button
            >
            <div class="modal-content">
                <h3>Add omoshiroi post</h3>
                <Avatar />
                <TextareaPost bind:value={text} />
                <InputImage />
                <ButtonDialog {handleSend} {closeAddDialog}/>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background-color: white;
        width: 500px;
        height: 400px;
        padding: 10px 50px;
        position: relative;
        overflow-y: auto;
    }
    .modal::-webkit-scrollbar{
        width: 11px;
        background-color: #9DEBCC;
        border-radius: 5px;
    }
    .modal::-webkit-scrollbar-thumb {
        background-color: #1B1E2A;
        border-radius: 5px;
        width: 10px;
    }
    .invisible {
        display: none;
    }
    .closeModal {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 900;
        font-size: 1.2rem;
        background: transparent;
        border: none;
        color: rgb(51, 51, 51);
        cursor: pointer;
    }
    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-content: space-evenly;
        overflow-y: auto;
    }
</style>
