<script>
  
  import Sidebar from "./components/Sidebar.svelte";
  import TaskDrawer from "./components/TaskDrawer.svelte";
  import MemberDrawer from "./components/MemberDrawer.svelte";
  import ShowAllTasks from "./components/ShowAllTasks.svelte";

  let taskDrawer = false;
  let memberDrawer = false;
  let selectedTaskId= -1;

  const handleTask = (e) =>{
    selectedTaskId = e.detail;
  }

</script>

<main>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar 
      on:toggleTaskDrawer={() => (taskDrawer = !taskDrawer)} 
      on:toggleMemberDrawer={() => (memberDrawer = !memberDrawer)}
      on:changeTask={handleTask}
      
      />
    </div>
    <div class="content">
      <ShowAllTasks {selectedTaskId} />
    </div>
  </div>
  
  <TaskDrawer
    {taskDrawer}
    on:toggleTaskDrawer={() => (taskDrawer = !taskDrawer)}
  />
  <MemberDrawer   {memberDrawer}
  on:toggleMemberDrawer={() => (memberDrawer = !memberDrawer)}
  />
  
</main>

<style>
  .dashboard{
    width:100%;
    display:flex;
    
  }
  .sidebar{
    width: 20vw;
    padding:20px;
  }
  @media screen and (max-width:768px){
        .sidebar {
            width: 40vw;
        }  
    }
  .content{
    width:60vw;
  }
  
</style>
