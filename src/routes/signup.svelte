<script>
    import { goto } from "$app/navigation";
    import SignUpService from "$lib/components/signup/service";
    let user = "";
    let password = "";
    let repeatpassword = "";
    let nickname = "";
    let email = "";
    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    $: samepassword = password !== repeatpassword ? false : true;
    $: valid_email = mail_format.test(email);

    const signupHandler = async () => {
        if (
            user != "" &&
            password != "" &&
            samepassword &&
            nickname != "" &&
            email != "" &&
            valid_email
        ) {
            let response = await SignUpService.signUp(user, password, nickname, email);
            if (response == 'User created successfully') {
                alert("User created successfully");
                goto("/signin");
            }else{
                alert(response);
                user = "";
                password = "";
                repeatpassword = "";
                nickname = "";
                email = "";
            }
        }
    };
</script>

<svelte:head>
    <title>Weebgram | Sign up</title>
</svelte:head>

<div class="main">
    <div class="container">
        <div class="title">
            <h1>Weebgram</h1>
            <h3>Sign Up</h3>
        </div>
        <div class="form">
            <label for="">User:</label>
            <input bind:value={user} type="text" />
            <label for="">Password:</label>
            <input bind:value={password} type="password" />
            <label for="">Repeat password:</label>
            <input bind:value={repeatpassword} type="password" />
            {#if !samepassword}
                <p>passwords do not match</p>
            {/if}
            <label for="">Nickname:</label>
            <input bind:value={nickname} type="text" />
            <label for="">E-mail:</label>
            <input bind:value={email} type="text" />
            {#if !valid_email}
                <p>Invalid E-mail</p>
            {/if}
        </div>
        <button on:click={()=>signupHandler()}>Sign Up</button>
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
        background-color: #9debcc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 500px;
        height: 90%;
        background: #1b1e2a;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    }
    .title {
        color: #9debcc;
        text-align: center;
    }
    .title h1 {
        margin-bottom: 0px;
        font-family: "Pacifico", cursive;
    }
    .form {
        display: flex;
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 1rem;
    }
    label {
        color: #9debcc;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
    input {
        width: 90%;
        height: 1rem;
        border: none;
        padding: 0.5rem;
        font-size: 1rem;
        color: #9debcc;
        border-bottom: #9debcc 1px solid;
        background-color: transparent;
        color: #9debcc;
        outline: none;
    }
    button {
        width: 90%;
        height: 2.3rem;
        border: #9debcc 1px solid;
        border-radius: 10px;
        background-color: #9debcc;
        color: #1b1e2a;
        font-size: 1.2rem;
        outline: none;
        cursor: pointer;
        font-weight: 600;
        margin: 1.2rem 0px;
    }
    button:hover {
        background-color: #1b1e2a;
        color: #9debcc;
    }
    p {
        margin: 2px;
        color: #eb9d9d;
    }
</style>
