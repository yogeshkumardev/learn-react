import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='space-y-10'>
      <h1 className='text-3xl font-bold underline'>
        Simple counter: <span className='ml-8'>{count}</span>
      </h1>
      <div className='flex gap-2'>
        <button
          onClick={() => {
            setCount( count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
