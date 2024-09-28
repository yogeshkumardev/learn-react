import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-1/2 mt-48'>
    <input value={text} onChange={handleChange} />
      <p className='m-5'>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </div>
    </>
  );
}
