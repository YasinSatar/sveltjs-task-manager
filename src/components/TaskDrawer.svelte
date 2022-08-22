<script>
    import {fly} from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import {members,allTasks,taskTypes} from "../stores/store"

    export let taskDrawer;

    let title;
    let description;
    let persons = [];
    let deadline;

    const handleSubmit = ()=>{
       let newTask = {
        id: $allTasks.length+1,
        title:title,
        description:description,
        persons:persons,
        deadline:deadline,
        isCompleted:false
       } 
       allTasks.update(currentTasks =>{
        return  [newTask, ...currentTasks];
       });
       taskTypes.update(currentTaskTypes =>{
        let updatedTask=currentTaskTypes.find(task => task.id===-1);
        console.log(updatedTask);
        updatedTask.$task.update(currentTask=>{
        return [newTask, ...currentTask];    
        })
        return currentTaskTypes;
       });
       title = "";
       description = "";
       persons = [];
       deadline = "";
    }
</script>

{#if taskDrawer}
    <div class="drawer" transition:fly={{ x:200, duration:1000}}>
        <span on:click={() => dispatch("toggleTaskDrawer")}>X</span>
        <h1>Add Task</h1>
        <form on:submit|preventDefault = {handleSubmit}>
            <input type="text" placeholder="Task Title" bind:value={title} />
            <textarea cols="23" rows="4" bind:value={description} />
            <select multiple bind:value={persons}>
                {#each $members as member (member.id) }
                <option value={member.id}>{member.name}</option>
                {/each}
            </select>
            <input type="date" bind:value={deadline} />
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
