import { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import './ToDoList.css';

const ToDoList = () => {

  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(() => {
    const saved = localStorage.getItem('to-do');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist toDoList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('to-do', JSON.stringify(toDoList));
  }, [toDoList]);

  const addToDo = (e) => {
    e.preventDefault();
    const trimmed = toDo.trim();
    if (!trimmed) return; // don't add empty tasks
    const newList = [...toDoList, trimmed];
    setToDoList(newList);
    setToDo("");
  };

  const removeItem = (toDo) => {
    const newList = toDoList.filter((item, index) => index !== toDo);
    setToDoList(newList);
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
        {toDoList.map((item, index) => {
          return (
            <div className="to-do" key={index}>
              <input type="checkbox" defaultChecked={false} />
              <h2>{item}</h2>
              <XCircleIcon className="remove" onClick={() => removeItem(index)} />
            </div>
          )
        })}
    </div>
  )
};

export default ToDoList;