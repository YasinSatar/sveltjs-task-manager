import {writable,readable, derived} from "svelte/store"
import {persistStore} from "./persistStore"




  const tasksInitial= [
    { 
      id: 1,
       title: "Title",
       description: "Description",
       persons:[-1,1,2,3],
       deadline: "05/04/2022",
       isCompleted:false
    },
    { 
      id: 2,
       title: "Title",
       description: "Description",
       persons:[-1],
       deadline: "05/04/2022",
       isCompleted:true
    },
    { 
      id: 3,
       title: "Title",
       description: "Description",
       persons:[-1],
       deadline: "05/04/2022",
       isCompleted:false
    },
  ];

  const membersInitial =[
    { id: -1, name: "All Team" }
  ];
  
export const allTasks = persistStore('data', tasksInitial)
export const members = persistStore('members', membersInitial)


export const completedTasks = derived(
  allTasks,
  $allTasks => $allTasks.filter(task => task.isCompleted===true)
);

export const inCompletedTasks = derived(
  allTasks,
  $allTasks => $allTasks.filter(task => task.isCompleted===false)
);

// I'm trying but it's not working. The system does not update the data after the task is created.
export const taskTypes = writable ([
  { id: -1, text: "All Tasks", task:allTasks},
  { id: 1, text: "Completed Tasks", task: completedTasks},
  { id: 0, text: "Incompleted Tasks", task: inCompletedTasks},
]);