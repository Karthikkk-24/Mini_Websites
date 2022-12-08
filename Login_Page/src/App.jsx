import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import FormComponents from "./components/FormComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="body">
        <div className="main_container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
