import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// should render following html
// <h1 class="title">Todo List</h1>

const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'title' },
  'Todo List'
);

ReactDOM.render(greetingElem, rootElement);
