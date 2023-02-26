import { useState } from "react";
import Data from "../features/data.json";
import summary from "../assets/styles/summary.module.css";
import Block from "./Block";

const Summary = () => {
  const [data, setData] = useState(Data);

  return (
    <div className={summary.summary}>
      <h2> Summary</h2>
      {data.map((block, index) => (
        <Block key={index} block={block} />
      ))}
      <button className={summary.btn}>Continue</button>
    </div>
  );
};

export default Summary;
