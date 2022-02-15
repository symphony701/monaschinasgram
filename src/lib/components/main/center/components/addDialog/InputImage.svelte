<script>
    import Fa from "svelte-fa";
    import { faUpload } from "@fortawesome/free-solid-svg-icons";
    import axios from "axios";

    let image;
    let showImage = false;
    let input;
    export let imageIsSelected = false;
    export let imageSelectedFile= null;

    

    const onChange = async ()=>{
        imageSelectedFile = input.files[0];
        imageIsSelected = true;
        
        if(imageSelectedFile){
            showImage = true;
            console.log(imageSelectedFile);
            const reader = new FileReader();
            reader.addEventListener("load" , ()=>{
                image.setAttribute("src" , reader.result)
            });
            reader.readAsDataURL(imageSelectedFile);
            return;
        }
        showImage = false;
    }
</script>

<input type="file" accept="image/*" id="file" bind:this={input} on:change={onChange} />
<label for="file">
    <div class="icon">
        <Fa icon={faUpload} />
    </div>
     Add Image
</label>
{#if showImage}
     <img src="" alt="preview" bind:this={image}/>
{/if}

<style>
    input[type="file"] {
        display: none;
    }
    label {
        color: brown;
        height: 2rem;
        width: 50%;
        background-color: #9debcc;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #9debcc;
        color: #1b1e2a;
        font-size: 1.1rem;
        font-weight: 500;
    }
    .icon {
        margin-right: 1rem;
    }
    img {
        max-width: 80%;
        height: auto;
        object-fit: cover;
        margin-top: 1rem;
    }
</style>
