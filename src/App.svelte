<script>
  
  import Sidebar from "./components/Sidebar.svelte";
  import TaskDrawer from "./components/TaskDrawer.svelte";
  import MemberDrawer from "./components/MemberDrawer.svelte";

  let taskDrawer = false;
  let memberDrawer = false;


</script>

<main>
  <Sidebar on:toggleTaskDrawer={() => (taskDrawer = !taskDrawer)} on:toggleMemberDrawer={() => (memberDrawer = !memberDrawer)} />
  <TaskDrawer
    {taskDrawer}
    on:toggleTaskDrawer={() => (taskDrawer = !taskDrawer)}
  />
  <MemberDrawer   {memberDrawer}
  on:toggleMemberDrawer={() => (memberDrawer = !memberDrawer)}
  />
  />
</main>

<style>
</style>
