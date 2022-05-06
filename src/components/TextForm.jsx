import React from 'react';
import { useState } from 'react';

export default function TextForm({ handleText }) {
  const [text, setText] = useState('');

  return (
    <>
      <label>
        Add your entry:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </label>
      {/* <button onClick={() => handleText(text)}>Submit</button> */}
    </>
  );
}
