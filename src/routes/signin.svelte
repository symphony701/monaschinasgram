<script>
    import { goto } from "$app/navigation";
    import { loggedUser } from '$lib/components/stores/GeneralStore';
    import SignInService from '$lib/components/signin/service';
    import User from '$lib/components/interfaces/UserInterface';
    let user = "";
    let password = "";
    let invalidData = false;

    const signinHandle = async ()=>{
        try{
            let response = await SignInService.signIn(user,password);
            loggedUser.signin(new User(response.id,response.nickname,response.profile_image));
            console.log($loggedUser);
            goto('/');
        }catch(e){
            invalidData = true;
        }
    }
</script>
<svelte:head>
    <title>Weebgram | Sign in</title>
</svelte:head>

<div class="main" >
    <div class="container">
        <div class="title">
            <h1>Weebgram</h1>
            <h3>Sign In</h3>
            {#if invalidData}
                <p>Some data is incorrect</p>
            {/if}
            
        </div>
        <div class="form">
            <label for="">User:</label>
            <input bind:value={user} type="text"   />
            <label for="">Password:</label>
            <input bind:value={password} type="password"  />
        </div>
        <button on:click={()=>signinHandle()}>Sign In</button>
        <div class="option-register">
            <p>Don't have an account?</p>
            <p on:click={()=> goto("/signup")} class="signup">Sign up</p>
        </div>
    </div>
</div> 

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap");
    * {
        font-family: "Montserrat", sans-serif;
    }
    .main {
    width: 100vw;
    height: 100vh;
    background-color: #9DEBCC;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .container {
    width: 500px;
    height: 500px;
    background: #1B1E2A;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    }
    .title{
        color: #9DEBCC;
        text-align: center;
    }
    .title h1 {
        margin-bottom: 0px;
        font-family: "Pacifico", cursive;
    }
    .form{
        display: flex;
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 1rem;
    }
    label{
        color: #9DEBCC;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        
    }
    input{
        width: 90%;
        height: 1.2rem;
        border: none;
        padding: 0.5rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #9DEBCC;
        border-bottom: #9DEBCC 1px solid;
        background-color: transparent;
        color: #9DEBCC;
        outline: none;
    }
    button{
        width: 90%;
        height: 2.3rem;
        border: #9DEBCC 1px solid;
        border-radius: 10px;
        background-color: #9DEBCC;
        color: #1B1E2A;
        font-size: 1.2rem;
        outline: none;
        cursor: pointer;
        font-weight: 600;
        margin: 1rem 0px;
    }
    button:hover{
        background-color: #1B1E2A;
        color: #9DEBCC;
    }
    .option-register{
        display: flex;
    }
    .option-register p{
        color:white
    }
    .signup{
        color:#9DEBCC !important;
        margin-left: 0.5rem;
        font-weight: 600;
        cursor: pointer;
    }
    p {
        margin: 2px;
        color: #eb9d9d;
    }
</style>
