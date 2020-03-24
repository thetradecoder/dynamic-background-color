import React from 'react';
import './App.css';

export default class App extends React.Component {

  componentDidMount(){
    let container = document.createElement("div");
container.style.height = "100vh";
document.body.appendChild(container);
container.addEventListener("mousemove", e => {
  let x = e.clientX;
  let y = e.clientY;
  container.style.backgroundColor = "rgb(" + x + "," + y + "," + 100 + ")";
});
  }

  render(){
  return "";
  }
}