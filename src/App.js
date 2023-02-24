import "./App.css";
import Form from "./Form.js";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

// Context dirancang untuk berbagi data yang dapat dianggap “global” untuk diagram komponen React atau Context itu seperti variable global yang bisa kamu akses dimana saja tanpa kamu harus memparsing props ke setiap komponen
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div id="switch">
          <label>{theme === "light" ? "light mode" : "dark mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
