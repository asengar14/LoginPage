import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Background from "./Components/Background";
import Form from "./Components/Form";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      themeColor : "#00BCD4"
    }
  }
  render(){
  return (
    <div className="App">
      <Background backgroundColor = {this.state.themeColor}/>
      <Form iconColor = {this.state.themeColor}/>
    </div>
  );
}
}
