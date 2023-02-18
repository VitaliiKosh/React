import './styles.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');
const style = {
  color: 'red',
  fontWeight: 700,
};

const element = (
  <>
    <h1 className='title'>Todo List</h1>
    <main className='todo-list'>
      <div className='actions'>
        <input className='task-input' type='text' />
        <button className='btn create-task-btn'>Create</button>
      </div>
      <ul className='list'></ul>
    </main>
  </>
);

ReactDOM.render(element, rootElement);
