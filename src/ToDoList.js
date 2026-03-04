import { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import './ToDoList.css';

const ToDoList = () => {

  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (e) => {
    e.preventDefault();
    const addToDo = [...toDoList, toDo];
    setToDoList(addToDo);
    setToDo("");
  };

  return (
    <div className="layout">
        <form onSubmit={addToDo}>
          <input 
            value={toDo}
            name="to do"
            onChange={(e) => {
              setToDo(e.target.value);
            }}
          />
          <button type="submit" />
        </form>
        {toDoList.map((item) => {
          return (
            <div className="to-do">
              <input type="checkbox" defaultChecked={false} />
              <h2>{item}</h2>
              <XCircleIcon className="remove"/>
            </div>      
          )
        })}
    </div>
  )
};

export default ToDoList;