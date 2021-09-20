import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRepos } from "./JS/Actions/reposActions";

function App() {
  const [name, setName] = useState("");
  const Result = useSelector((state) => state.repos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRepos(name));
  };
  console.log(Result);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Search</button>

      {Result.map((el, index) => {
        return <h2 key={index}>{el.name}</h2>;
      })}
    </div>
  );
}

export default App;
