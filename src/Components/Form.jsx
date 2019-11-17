import React, { Component } from "react";
import "../css/form.css"

export default class Form extends Component {
    render(){
        return (
            <div className = "form-container">
                <form className = "form-elements-container">
                    <div className = "form-input" style = {{ borderColor : this.props.iconColor}}><span class="fa fa-user" style = {{color : this.props.iconColor}}></span><input type = "text" name = "username" placeholder = "username"></input></div>
                    <div className = "form-input"  style = {{ borderColor : this.props.iconColor}}><span class="fa fa-key" style = {{color : this.props.iconColor}}></span><input type = "text" name = "password" placeholder = "password"></input></div>
                    <button className = "cta-button" style = {{backgroundColor : this.props.iconColor}}>Login</button>
                </form>
            </div>
        )
    }
}