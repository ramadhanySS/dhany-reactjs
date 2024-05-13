import { useState } from "react";

const FuntionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1 className="">komponent ini di buat dengan function</h1>
      <p>hello {nama}</p>
      <div className="">
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={handleMinus}>
          -
        </button>
        <span> {value} </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
};
export default FuntionalComponent;
