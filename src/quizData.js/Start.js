import React, { useRef } from 'react';

const Start = (setUserName) => {
    const inputRef= useRef()
const handleClick= ()=>{
inputRef.current.value && setUserName(inputRef.current.value)
}

  return <div>
 <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
      ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );

  </div>;
};

export default Start;
