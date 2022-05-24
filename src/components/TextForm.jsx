import React from 'react';
import { useState } from 'react';

export default function TextForm({ handleText, text, setText }) {

  return (
    <>
      <label>
        Add your entry:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </label>
      <button onClick={handleText}>Submit</button>
    </>
  );
}
