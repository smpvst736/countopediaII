import { useState } from 'react';
import attackImg from './images/attack.png';
import defenceImg from './images/defend.png';

function Counter() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(function (prev) {
      return prev + 1;
    });
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="container">
      <div className="row text-white text-center">
        <h1>Game Score: {count}</h1>
        <p>You win at +5 points and lose at -5 points!</p>

        <h1>Game Status</h1>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attackImg}
            style={{
              width: '100%',
              cursor: 'pointer',
              border: '1px solid green',
            }}
            onClick={handleIncrement}
            className="p-4 rounded"
          ></img>
        </div>
      </div>
      <div className="col-6 col-md-3 offset-md-3">
        <img
          src={defenceImg}
          style={{
            width: '100%',
            cursor: 'pointer',
            border: '1px solid red',
          }}
          onClick={handleDecrement}
          className="p-4 rounded"
        ></img>
        <div className="col-16 col-md-4 offset-md-4">
          <button className="btn btn-success m-2 w-500">Random Play</button>
          <br />
          <button className="btn btn-danger m-2 w-500">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
