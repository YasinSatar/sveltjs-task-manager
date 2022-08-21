<script>
        import {members} from "../stores/store"
export let task;
</script>

<div class="card">
    <h5>{task.title}</h5>
    <p>{task.description}</p>
    <div class="members">
        {#each $members as member (member.id)}
        {#each task.persons as person}
        {#if member.id==person}
        <span>{member.name} </span>
        {/if}
        {/each}
        {/each}
    </div>
    <p>{task.deadline}</p>
</div>

<style>
    .card{
        flex-basis: 15%;
        padding: 10px;
        min-width: 200px;
        max-width: 300px;
        max-height: 200px;
        margin-right: 10px;
        background-color: azure;
        border-radius: 15px;
        box-shadow: 2px 2px rgb(198, 186, 186);
        text-align:left;
    }
    p,span{
        text-align: left;
        font-size: 10px;
    }
    .members{
        display: flex;
        column-gap: 5px;
    }
    .members span:not(:last-child)::after{  
       content: ",";
       margin-left:-2px;
    }
    .completed{
        
        background-color: rgb(166, 135, 196);
    }
    .delete-btn{
        font-size: 16px;
        cursor: pointer;
    }
</style>