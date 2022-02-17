<script>
    export let image;
</script>
<div class="avatar">
    <img src="{image}" alt="">
</div>

<style>
    .avatar{
        border: 2px solid #ccc;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>