import { useState } from "react";
import "./App.css";
import Error404 from "./components/error404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Error404 />
    </>
  );
}

export default App;
