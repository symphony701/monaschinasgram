<script>
    import { friendChat } from "./storeChat";
    export let friend;
    const { name, image, state } = friend;
    const selectFriend = () => {
        friendChat.select(friend);
    };
</script>

<div class="item-container" on:click={()=>selectFriend()}>
    <div class="avatar">
        <img src="{image}" alt="">
    </div>
    <div>
        <p>{name}</p>
        <div class="state">
            <div class="{(state === 'Online')? 'circle-online':'circle-offline' }"></div>
            <p>{state}</p>
        </div>
    </div>
</div>

<style>
    .item-container{
        display: flex;
        padding: 5px;
        align-items: center;
        margin: 10px 0px;
        cursor: pointer;
    }
    .state{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    p{
        margin: 0;
        font-size: 0.9rem;
    }
    .circle-online{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #33c920;
        margin-right: 5px;
    }
    .circle-offline{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ff0000;
        margin-right: 5px;
    }
    .avatar{
        border: 2px solid #ccc;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        cursor: pointer;
        margin-right: 15px;
    }
    img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
</style>