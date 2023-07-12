import React, { useState } from "react";


function App() {

  const [text , setText]  = useState("");
  const [items , setitem] = useState([]);

  function handlechange(event){
    const newvalue = event.target.value;
    setText(newvalue)
  }

  function handleclick(){
    setitem((prevValue) => {
      return [...prevValue, text]
    })
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={text} onChange={handlechange}/>
        <button onClick={handleclick}> 
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => 
            <li>{item}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
