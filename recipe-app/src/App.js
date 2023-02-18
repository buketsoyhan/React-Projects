import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "ba6241ee";
  const APP_KEY = "fc505d609b490ef95aae07d7d4138f62";
  const exReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("Effect has been run");
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        <button onClick={increment}>Click Here</button>
        {counter}
      </div>
    </div>
  );
};

export default App;
