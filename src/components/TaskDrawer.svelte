<script>
    import {fly} from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import {members} from "../stores/store"

    export let taskDrawer;
</script>

{#if taskDrawer}
    <div class="drawer" transition:fly={{ x:200, duration:1000}}>
        <span on:click={() => dispatch("toggleTaskDrawer")}>X</span>
        <h1>Add Task</h1>
        <form on:submit|preventDefault>
            <input type="text" placeholder="Task Title" />
            <textarea cols="23" rows="4" />
            <select>
                {#each $members as member (member.id) }
                <option value={member.id}>{member.name}</option>
                {/each}
            </select>
            <input type="date" />
            <button type="submit"> Submit Task</button>
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
    textarea,
    select,
    button {
        flex: 1 1 auto;
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
</style>
