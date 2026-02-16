import { useState } from 'react';

const ToDoList = () => {
  
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  console.log('toDo', toDo);
  console.log('toDoList', toDoList);

  const addToDo = (e) => {
    e.preventDefault();
    const addToDo = [...toDoList, toDo];
    setToDoList(addToDo);
    setToDo("");
  };

  console.log(toDoList);

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
      </div>
  )
};

export default ToDoList;