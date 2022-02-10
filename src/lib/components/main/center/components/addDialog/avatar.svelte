<script>
    export let name;
</script>
<div class="container">
    <div class="avatar">
        <img src="https://i.pinimg.com/originals/2c/67/80/2c678002e587299b3511cec86382daf1.jpg" alt="">
    </div>
    <div>
        <h4>{name}</h4>
    </div>
</div>
<style>
    .container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
    .avatar{
        border: 2px solid #ccc;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-right: 10px;
    }
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>