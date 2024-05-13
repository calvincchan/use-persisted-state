import { useState } from "react";
import "./App.css";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <>
      <h3>Use Persisted State</h3>
      <div className="card">
        <label>Text1:</label>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div className="card">
        <label>text2:</label>
        <textarea
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        ></textarea>
      </div>
      <div className="card">
        <button>Clear</button>
        <button>Save</button>
      </div>
    </>
  );
}

export default App;
