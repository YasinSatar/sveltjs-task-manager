<script>
    import Card from "./Card.svelte";
    import {
        taskTypes,
        allTasks,
        completedTasks,
        inCompletedTasks,
    } from "../stores/store";
    import {fade, scale} from "svelte/transition"
    import {flip} from "svelte/animate"

    // -1 = All Tasks, 0 = inCompletedTasks, 1 = completedTasks
    export let selectedTaskId;

    let selectedTask;
    function changeTaskType(selectedTaskId) {
        selectedTask = $taskTypes.find(
            (task) => task.id === selectedTaskId
        ).task;
        return $selectedTask;
    }
</script>

<div class="all-tasks">
    {#if selectedTaskId == -1}
        {#each $allTasks as task (task.id)}
            <div in:fade out:scale|local animate:flip={{duration:500}}>
                <Card {task} />
            </div>
        {/each}
    {/if}
    {#if selectedTaskId == 1}
        {#each $completedTasks as task (task.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <Card {task} />
        </div>
        {/each}
    {/if}
    {#if selectedTaskId == 0}
        {#each $inCompletedTasks as task (task.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <Card {task} />
        </div>
        {/each}
    {/if}
    <!-- {#each changeTaskType(selectedTaskId) as task (task.id)}
        <Card {task} />
    {/each} -->
</div>

<style>
    .all-tasks {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 1.5rem;
    }
    .box {
        display: flex;

        flex-wrap: wrap;
    }
</style>
