<script>
    import { scale } from "svelte/transition";
    import axios from "axios";
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
    let imageIsSelected;
    let imageSelectedFile;

    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/adhara123/upload";
    const presset = "weebgram";

    let text;
    const handleSend = async () => {
        let image="";
        if (imageIsSelected == true) {
            const formData = new FormData();
            formData.append("file", imageSelectedFile);
            formData.append("upload_preset", presset);
            let response = await axios.post(CLOUDINARY_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            image=response.data.secure_url;
        }
        const postData = {
            userId: $loggedUser.id,
            image: image,
            text: text,
            nLikes: 0,
            nComments: 0,
        };
        takeNewPost(postData);
        text = "";
        imageIsSelected = false;
        imageSelectedFile = null;
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
                <InputImage bind:imageIsSelected bind:imageSelectedFile />
                <ButtonDialog {handleSend} {closeAddDialog} />
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
    .modal::-webkit-scrollbar {
        width: 11px;
        background-color: #9debcc;
        border-radius: 5px;
    }
    .modal::-webkit-scrollbar-thumb {
        background-color: #1b1e2a;
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
