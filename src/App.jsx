import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [names, setNames] = useState([]);

  return (
    <div>
      <h1>2024 파리 올림픽 메달</h1>

      <Form names={names} setNames={setNames} />

      <List names={names} setNames={setNames} />
    </div>
  );
}

export default App;
