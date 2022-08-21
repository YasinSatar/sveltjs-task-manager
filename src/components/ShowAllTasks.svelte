<script>
    import Card from "./Card.svelte"
    import {allTasks} from "../stores/store"
</script>


<div class="all-tasks">
    {#each $allTasks as task (task.id) }
    <Card {task} />  
    {/each}
  
</div>

<style>
    .all-tasks {
      width:100%;
      padding: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 1rem;
    }
    .box {
      display: flex;
    
      flex-wrap: wrap;
    }
  </style>