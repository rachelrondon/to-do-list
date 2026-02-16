import { useState } from 'react';

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
    <div>
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
            <h2>{item}</h2>
            <button 
              className="remove">
                remove
              </button>
            </div>      
          )
        })}
    </div>
  )
};

export default ToDoList;