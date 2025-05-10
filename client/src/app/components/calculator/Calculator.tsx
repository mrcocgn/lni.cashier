import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    switch (value) {
      case "AC":
        setInput("");
        break;
      case "C":
        setInput(prev => prev.slice(0, -1));
        break;
      case "Enter / =":
        try {
          setInput(eval(input).toString());
        } catch {
          setInput("Error");
        }
        break;
      case "X":
        setInput(prev => prev.slice(0, -1));
        break;
      case "Products":
      case "Services":
        alert(`TODO: Open ${value} panel`);
        break;
      default:
        setInput(prev => prev + value);
        break;
    }
  };

  const buttons = [
    "7", "8", "9", "*", "%", "X",
    "4", "5", "6", "-", "C", "AC",
    "1", "2", "3", "+", "Products", "Services",
    "0", "00", ".", "Enter / ="
  ];

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="parent">
        {buttons.map((label, index) => (
          <div
            key={index}
            className={`div${index + 1} children`}
            onClick={() => handleClick(label)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
