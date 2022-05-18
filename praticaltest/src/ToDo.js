import { prepareDataForValidation } from 'formik';
import React from 'react'
import TodoItem from './TodoItem';

 function ToDo({list}) {

    console.log(list);
  return (
    <ul>
        { console.log("Render: Todo")}
     {list.todo.map((item) => (
       <TodoItem item={{item}} />
     ))}
   </ul>
  )
}

//  export default React.memo(ToDo,(pr, cu)=> {

  

//      if(pr?.list.todo[0]?.title == cu?.list.todo[0].title)
//      {

//          return true;
//      }

//  } );

 export default React.memo(ToDo);