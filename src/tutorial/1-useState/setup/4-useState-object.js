import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Peter', age: 24, message: 'random message'});

  const changeMessage = () => {
    setPerson({...person, message: 'hello world'});
  };

  return (
    <>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.message}</p>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
    );
};

export default UseStateObject;
