// // const a = require('@/haha');

// var a = 1;
// console.log(a);
import React from 'react';
import ReactDOM from 'react-dom';
import avatar_group from './assets/avatar_group.png';

ReactDOM.render(
  <h1>Hello, world!<img src={avatar_group} /></h1>,
  document.getElementById('root')
);