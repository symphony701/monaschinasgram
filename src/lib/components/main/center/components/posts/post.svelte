<script>
  import Fa from "svelte-fa";
  import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
  import ProfileIcon from "../../../navbar/profileIcon.svelte";
</script>

<div class="post">
  <div class="top-post">
    <ProfileIcon />
    <p class="name">SymphonyRN</p>
    <p class="time">1 min.</p>
  </div>
  <div class="post-content">
    <img
      src="https://c.tenor.com/gDFrYK5sYSEAAAAC/menhera-chan.gif"
      alt="postimage"
    />
  </div>
  <div class="text-post">
    <p>Menhera dando animos :v</p>
  </div>
  <div class="footer-post" >
    <div class="icons">
      <div class="hearths">
        <Fa icon={faHeart} />
        <p>0</p>
      </div>
      <div class="comments">
        <Fa icon={faComment} />
        <p>0</p>
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
    align-items: flex-start;
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
  .icons{
    display: flex;
    justify-content: flex-start;
    width: 95%;
    font-size: 1.7rem;
    color: #55C6C6;
  }
  .icons div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
  }

  .icons div p{
    margin-left: 0.5rem;
    color: black;
    font-size: 1rem;
  }
  
</style>
