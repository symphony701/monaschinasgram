<script>
  import Fa from "svelte-fa";
  import { faPaperPlane, faUserNinja } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="chat-container">
  <div class="chats">
    <div class="no-select">
      <div class="icon-noselect">
        <Fa icon={faUserNinja} />
      </div>
      <h4>Select a tomodachi to start chatting :3</h4>
    </div>
  </div>
  <div class="input-chat">
    <input type="text" class="form-control" placeholder="Type a message..." />
    <div class="send-message">
      <Fa icon={faPaperPlane} />
    </div>
  </div>
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 95%;
    max-width: 95%;
    border-radius: 10px;
    overflow-y: auto;
    height: calc(100vh - 360px);
    justify-content: flex-end;
  }
  .chats {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100% - 50px);
  }
  .no-select {
    width: 95%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #a8a8a8;
  }
  .icon-noselect {
    font-size: 5rem;
  }
  .input-chat {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: 10px;
    height: 50px;
  }
  .form-control {
    border: none;
    padding: 5px;
    width: 80%;
    margin-bottom: 10px;
    outline: none;
    border-bottom: 1px solid #ccc;
    margin-right: 10px;
  }
  .send-message {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 14px;
    cursor: pointer;
  }
</style>
