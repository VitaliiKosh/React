import React from 'react';

const Greeting = (props) => {
  const element = (
    <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I am ${props.birthDate} years old`}</div>
  );

  return element;
};

export default Greeting;
