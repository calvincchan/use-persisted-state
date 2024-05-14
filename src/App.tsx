import { FC, useState } from "react";
import "./App.css";
import { usePersistedState } from "./use-persisted-state";

const Form: FC<{
  onHide: () => void;
  onClear: () => void;
}> = ({ onHide, onClear }) => {
  const [text1, setText1, clearText1] = usePersistedState(
    "init value 1",
    "text1"
  );
  const [text2, setText2, clearText2] = usePersistedState(
    "init value 2",
    "text2"
  );

  const hide = () => {
    onHide();
  };

  const clear = () => {
    clearText1(false);
    clearText2(false);
    onClear();
  };

  return (
    <>
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
        <button onClick={hide}>Hide Form</button>
        <button onClick={clear}>Clear Storage</button>
      </div>
    </>
  );
};

function App() {
  const [show, setShow] = useState(false);
  const [redraw, setRedraw] = useState(0);

  function hide() {
    setShow(false);
    setRedraw((prev) => prev + 1);
  }

  function closeFormAndRedraw() {
    setShow(false);
    setRedraw((prev) => prev + 1);
  }

  return (
    <div key={redraw}>
      <h3>Use Persisted State</h3>
      {show ? (
        <Form
          key={redraw}
          onHide={() => hide()}
          onClear={() => closeFormAndRedraw()}
        />
      ) : (
        <button onClick={() => setShow(true)}>Show Form</button>
      )}
    </div>
  );
}

export default App;
