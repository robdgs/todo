import { useState } from "react";
import { Form } from "./components/form";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const formProps = {
    inputValue,
    setInputValue,
    setTaskList,
  };

  const handleDelete = (id) =>
    setTaskList((prev) => prev.filter((_, i) => i !== id));

  return (
    <div className="App">
      <Form {...formProps} />
      <ol>
        {taskList.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => handleDelete(i)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
