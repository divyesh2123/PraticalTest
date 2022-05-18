import React, { useEffect,useState } from 'react'
import ToDo from './ToDo';

export default function MyDataFun() {

    const [todo, setTodo] = React.useState([
        { title: "Shop groceries 🛒" },
        { title: "Do yoga 🧘" }
      ]);


      const [text, setText] = React.useState("");

      const handleText = (e) => {
        setText(e.target.value);
      };
     
      const handleAddTodo = () => {
        setTodo(todo.concat({ title: text }));
      };
  return (
    <div>
    <input type="text" value={text} onChange={handleText} />
    <button type="button" onClick={handleAddTodo}>
      <span role="img" aria-label="add emojie">
        ➕
      </span>
      Add todo
    </button>

    <ToDo list={{todo}} />
  </div>
  )
}