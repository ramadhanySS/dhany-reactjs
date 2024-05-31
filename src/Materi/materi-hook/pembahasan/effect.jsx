import { useEffect, useState } from "react";

const Effect = () => {
  let [text, setText] = useState("");
  let [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(() => localStorage.getItem("text"));
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text);
    console.log("sinkornisasi");
  }, [text]);

  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}></textarea>
      <p>{display}</p>
    </div>
  );
};

export default Effect;
