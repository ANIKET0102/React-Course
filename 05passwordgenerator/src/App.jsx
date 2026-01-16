import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3"> Password Generator</h1>
        <div className="shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none bg-gray-100 text-black px-3 py-0.5 shrink-0 rounded-lg mr-5"
            placeholder="password"
            readOnly
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg">
            {" "}
            Copy{" "}
          </button>
          <div className="flex text-sm gap-x-2">
            <div className=" text-sm gap-x-1">
              <input 
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"     
              onChange={(e) => {setLength(e.target.value)}}         
              />
              <label>Length: {length}</label>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
