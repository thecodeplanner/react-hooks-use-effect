import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return function () {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

function App() {


  const [showClock, setShowClock] = useState(true);


  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <>
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
    
    <div>
          {showClock ? <Clock /> : null}
          <button onClick={() => setShowClock(false)}>Hide Clock</button>
      </div>
      </>
  )
}

export default App;
