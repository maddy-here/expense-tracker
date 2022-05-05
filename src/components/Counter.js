import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const inc = (e) => {
    if (e.target.classList.contains("in")) setNum(num + 1);
    else {
      if (num > 0) setNum(num - 1);
    }
  };
  const color = {
    color: "#fff",
    textAlign: "center",
    fontSize: "5rem",
  };
  const style = {
    color: "black",
    padding: "10px",
    margin: "0px 10px 20px",
    fontSize: "2rem",
    borderRadius: "10px",
    borderStyle: "none",
    cursor: "pointer",
  };
  return (
    <div>
      <p style={color}>{num}</p>
      <button style={style} className="dec" onClick={inc}>
        Decrease
      </button>
      <button style={style} className="in" onClick={inc}>
        Incease
      </button>
      ; ;
    </div>
  );
};

export default Counter;
