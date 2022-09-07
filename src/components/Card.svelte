<script>
    import { members, allTasks } from "../stores/store";
    export let task;

    const handleComplete = (id) => {
        allTasks.update((currentTasks) => {
            let completedTask = $allTasks.find((task) => task.id === id);
            completedTask.isCompleted = !completedTask.isCompleted;
            return currentTasks;
        });
    };
    const handleRemove = (id) => {
        allTasks.update((currentTasks) => {
            return currentTasks.filter((task) => task.id !== id);
        });
    };

    //let dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
</script>

<div
    class="card"
    class:completed={task.isCompleted}
    on:dblclick={() => {
        handleComplete(task.id);
    }}
>
    <span
        class="btn-delete"
        on:click={() => {
            handleRemove(task.id);
        }}>X</span
    >
    <h5>{task.title}</h5>
    <p>{task.description}</p>
    <div class="members">
        {#each $members as member (member.id)}
            {#each task.persons as person}
                {#if member.id == person}
                    <span>{member.name} </span>
                {/if}
            {/each}
        {/each}
    </div>
    <p>{new Date(task.deadline).toLocaleDateString("tr-TR", dateFormatOptions)}</p>
</div>

<style>
    .card {
        flex-basis: 15%;
        padding: 10px;
        min-width: 200px;
        max-width: 300px;
        max-height: 200px;
        margin-right: 1.5rem;
        background-color: rgb(253, 247, 154);
        border-radius: 15px;
        box-shadow: 2px 2px rgb(198, 186, 186);
        text-align: left;
        cursor: pointer;
        user-select: none;
        line-height: 10px;
    }
    p,
    span {
        text-align: left;
        font-size: 10px;
    }
    .members {
        display: flex;
        column-gap: 5px;
    }
    .members span:not(:last-child)::after {
        content: ",";
        margin-left: -2px;
    }
    .completed {
        background-color: #99f8b6;
    }
    .completed :not(.btn-delete) {
        text-decoration: line-through;
    }
    .btn-delete {
        margin-right: -20px;
        margin-top: -20px;
        float: right;
        font-size: 14px;
        padding: 3px 10px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid #eaeaea;
        line-height: 1.5rem;
    }
</style>
