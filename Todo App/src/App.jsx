import { useState, createContext, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeToggle } from "./Componets/ThemeToggle";
function App() {
  const inputRef=useRef();
   useEffect(()=>inputRef.current.focus(),[])
  const [theme, settheme] = useState("white");
  const [task, settask] = useState([]);
  const [input, setInput] = useState("");
   
  //saveTask
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  //loadTask
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) settask(saved);
  }, []);
  //addTask
  const addTask = () => {
    if (!input.trim()) return;
    settask([...task, input]);
    setInput("");
  };
  //deleteTask
  const deleteTask = (index) => {
    const newTask = task.filter((_, i) => i !== index);
    settask(newTask);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <ThemeToggle />
        <h1>Todo App</h1>
        <div className="input-group"  ref={inputRef}
        style={{border: "1px solid black"}}>
          <input
            onKeyDown={(e)=>{
              if (e.key === "Enter") {
              addTask();
            }}}
            placeholder="Add a Task"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button onClick={addTask}>Add Task</button>
          <ul>
            {/* //() => ( JSX )   → auto return 
            () => { JSX }   → must write return */}
            {task.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteTask(index)}>Delete Task</button>
              </li>
            ))}
          </ul>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
