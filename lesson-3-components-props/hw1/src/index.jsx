import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

<Greeting />;

ReactDOM.render(
  <Greeting firstName='Bob' lastName='Marley' birthDate='25' />,
  rootElement
);
