import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName='Bob'
    lastName='Marley'
    birthDate={new Date(2007, 4, 25)}
  />,
  rootElement
);
