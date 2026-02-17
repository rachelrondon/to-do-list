import { useState } from 'react';
import "./ToDoList.css";

const ToDoList = () => {

  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addInput = [...inputList, input];
    setInputList(addInput);
    setInput("");
  };

  console.log(inputList);
  return (
    <div className="layout">
        <form onSubmit={handleSubmit}>
          <input 
            className="input-box"
            value={input}
            name="input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default ToDoList;