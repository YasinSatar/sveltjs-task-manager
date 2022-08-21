<script>
    import {fly} from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import {members} from "../stores/store"

    export let memberDrawer;

    let newmember;
    let valid=false, error = "";
    const handleSubmit = () =>{
    if(newmember.trim().length<3){
        error = "Member name must be at least 3 chars";
        return false;
    }
    $members = [...$members,{id: $members.length, name:newmember}];
    error = "";
    newmember= "";
    }
</script>

{#if memberDrawer}
    <div class="drawer" transition:fly={{ x:200, duration:1000}}>
        <span on:click={() => dispatch("toggleMemberDrawer")}>X</span>
        <h1>Add Member</h1>
        <form on:submit|preventDefault = {handleSubmit}>
            <input on:input={()=> error= (newmember.trim().length<2)? error  : ""  } type="text" placeholder="Member Name" bind:value={newmember} />
            <p class="error">{error}</p>
            <button type="submit"> Submit Member</button>
        </form>
    </div>
{/if}

<style>
    .drawer {
        position: absolute;
        top: 0;
        right: 0;
        width: 20vw;
        height: 100vh;
        padding: 20px;
        background-color: #eaeaea;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width:768px){
        .drawer {
            width: 40vw;
        }  
    }
    h1 {
        color: rgb(54, 52, 52);
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input,
    button {
        flex: 1 1 fit-content;
        border-radius: 5px;
        margin-top: 10px;
        border: unset;
        padding: 5px 10px;
        line-height: 1.5em;
        width: 100%;
    }
    button {
        background-color: crimson;
        color: #fff;
    }
    span {
        position: absolute;
        text-align: center;
        top: 10px;
        left: 10px;
        font-size: 30px;
        cursor: pointer;
        border-radius: 100%;
        padding: 10px 10px;
        color: gray;
    }
    span:hover {
        color: black;
    }

    .error{
        color :red;
    }
</style>
