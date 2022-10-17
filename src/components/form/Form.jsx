import "./index.css";

export function Form(props) {
  const { inputValue, setInputValue, setTaskList } = props;
  const handleOnChange = (e) => setInputValue(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, inputValue]);
    setInputValue("");
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        placeholder="Insert task here"
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
      />
      <button>Submit</button>
    </form>
  );
}
