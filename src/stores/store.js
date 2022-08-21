import {writable} from "svelte/store"


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
     persons:[-1,1],
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