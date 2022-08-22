import {writable, readable, derived} from "svelte/store"


export const members = writable([
    { id: -1, name: "All Team" },
    { id: 1, name: "Yasin" },
    { id: 2, name: "Selin" },
    { id: 3, name: "Kerem" },
  ]);

export const allTasks = writable([
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
]);

export const completedTasks = derived(
  allTasks,
  $allTasks => $allTasks.filter(task => task.isCompleted===true)
);

export const inCompletedTasks = derived(
  allTasks,
  $allTasks => $allTasks.filter(task => task.isCompleted===false)
);

export const taskTypes = writable ([
  { id: -1, text: "All Tasks", task:allTasks},
  { id: 1, text: "Completed Tasks", task: completedTasks},
  { id: 0, text: "Incompleted Tasks", task: inCompletedTasks},
]);