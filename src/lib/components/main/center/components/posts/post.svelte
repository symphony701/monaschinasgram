<script>
  import Fa from "svelte-fa";
  import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
  import PostProfileIcon from "./PostProfileIcon.svelte";
  import moment from 'moment'
  export let data;
  const {
    _id,
    createdAt,
    nComments,
    nLikes,
    nickname,
    profile_image,
    text,
    userId,
    image,
  } = data;
</script>

<div class="post">
  <div class="top-post">
    <PostProfileIcon image={profile_image} />
    <p class="name">{nickname}</p>
    <p class="time">{moment(createdAt).fromNow()}</p>
  </div>
  <div class="post-content">
    {#if image !== ""}
      <img src={image} alt="postimage" />
    {/if}
  </div>
  <div class="text-post">
    <p>
      {text}
    </p>
  </div>
  <div class="footer-post">
    <div class="icons">
      <div class="hearths">
        <Fa icon={faHeart} />
        <p>{nLikes}</p>
      </div>
      <div class="comments">
        <Fa icon={faComment} />
        <p>{nComments}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .post {
    margin-top: 30px;
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 10px 0px;
    border-radius: 10px;
  }
  .top-post {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }
  .name {
    font-size: 17px;
    font-weight: bold;
  }
  .time {
    font-size: 12px;
    color: #828282;
  }

  .post-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 75%;
    max-height: 25rem;
  }
  .text-post {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0rem 1rem;
  }
  .footer-post {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 0rem 0rem;
  }
  .icons {
    display: flex;
    justify-content: flex-start;
    width: 95%;
    font-size: 1.7rem;
    color: #55c6c6;
  }
  .icons div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
  }

  .icons div p {
    margin-left: 0.5rem;
    color: black;
    font-size: 1rem;
    text-align: center;
  }
</style>
