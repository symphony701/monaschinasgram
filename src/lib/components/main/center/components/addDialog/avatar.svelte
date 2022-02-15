<script>
    import { loggedUser } from "$lib/components/stores/GeneralStore";
    
</script>
<div class="container">
    <div class="avatar">
        <img src="{$loggedUser.profile_image}" alt="">
    </div>
    <div>
        <h4>{$loggedUser.nickname}</h4>
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