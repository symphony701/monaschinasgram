<script>
    export let handleSend;
    export let closeAddDialog;
    const clickSelect = () =>{
        handleSend();
        closeAddDialog()
    }
</script>
<button on:click={()=>clickSelect()} >Post!</button>

<style>
    button {
        background-color: #00AAA9;
        color: white;
        padding: 10px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        border-radius: 15px;
        font-size: 1.1rem;
        font-weight: 600;
    }
</style>