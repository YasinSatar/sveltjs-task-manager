<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import {taskTypes} from "../stores/store";



  let selectedTask = -1;
</script>

<div class="sidebar">
  <div class="add-buttons">
    <div class="btn-add-task" on:click={()=>dispatch('toggleTaskDrawer')}>Add Task</div>
    <div class="btn-add-member" on:click={()=>dispatch('toggleMemberDrawer')}>Add Member</div>
  </div>

  <div class="separater" />

  <div class="task-types">
    {#each $taskTypes as task (task.id)}
      <li
        on:click={() => {
          selectedTask = task.id
          dispatch('changeTask',task.id)
        }}
        data-id={task.id}
        class:selected={selectedTask === task.id}
      >
        {task.text}
      </li>
    {/each}
  </div>
</div>

<style>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    height: 100vh;
    padding: 20px;
    background-color: #eaeaea;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width:768px){
        .sidebar {
            width: 40vw;
        }  
    }
  .add-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    user-select: none;
    flex-wrap: wrap;
  }
  .btn-add-task,
  .btn-add-member {
    background-color: rgb(221, 57, 90);
    color: rgb(223, 210, 210);
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    min-width:100px;
    margin-bottom:10px;
  }
  @media screen and (max-width:1024px){
    .add-buttons {
      flex-direction: column;
    }
    .btn-add-task,
    .btn-add-member{
            width: 80%;
            margin-bottom:10px;
        }  
    }
  .btn-add-member:hover {
    background-color: crimson;
  }
  .btn-add-task:hover {
    background-color: crimson;
  }
  .separater {
    width: 100%;
    height: 3px;
    background-color: #2222;
  }
  .task-types {
    padding-top: 20px;
  }
  li {
    list-style: none;
    font-size: 20px;
    color: grey;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    text-align: left;
    display: flex;
  }
  li::before {
    content: "";
    background-color: lightgrey;
    width: 10px;
    height: 10px;
    font-size: 24px;
    border-radius: 50%;
    margin-right: 8px;
    align-self: center;
  }

  li:hover {
    color: rgb(0, 0, 0);
  }
  li:hover::before {
    background-color: rgb(0, 0, 0);
  }
  li.selected {
    color: rgb(0, 0, 0);
  }
  li.selected::before {
    background-color: rgb(0, 0, 0);
  }
</style>
