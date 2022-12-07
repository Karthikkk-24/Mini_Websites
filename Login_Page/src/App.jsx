import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import FormComponents from "./components/FormComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="body">
        <div className="main_container">
          <FormComponents />
          <FormComponents />
          <FormComponents />
          <FormComponents />
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked
                className="checkbox checkbox-primary"
              />
              <span className="label-text" style={{ color: "black" }}>
                Remember me
              </span>
            </label>
          </div>
          <button className="btn btn-accent">Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
