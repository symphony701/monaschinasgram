<script>
    export let value = '';
	
</script>


<textarea class="text-area" bind:value={value} placeholder="Type here your post uwu" name="post" rows="5" ></textarea>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    textarea{
        resize: none;
        width: 90%;
        padding: 15px;
        outline: none;
        max-height: 300px;
        min-height: 5rem;
        height: 5rem;
        font-size: 1rem;
        font-family: "Montserrat", sans-serif;
        border: none;
        margin-bottom: 1rem;
    }
    .text-area::-webkit-scrollbar{
        width: 8px;
        background-color: #9DEBCC;
        border-radius: 5px;
    }
    .text-area::-webkit-scrollbar-thumb {
        background-color: #1B1E2A;
        border-radius: 5px;
        width: 5px;
    }
</style>