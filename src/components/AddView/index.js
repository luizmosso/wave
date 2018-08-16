import React, { Component } from 'react';
import ActionButton from '../ActionButton';
import { Link } from "react-router-dom";

export default class AddView extends Component {

    render() {
        return (
            <div className={`addView ${this.props.className}`}>
                <div className="pass">{this.props.number}</div>
                <Link to={"/familias"}>
                    <div className="close">+</div>
                </Link>
                <div className="title">
                    {this.props.title}
                </div>
                {this.props.children}
                {
                    this.props.hasButton === false ? null :
                        <ActionButton 
                            className={this.props.buttonClass}  
                            text="Salvar" 
                            onClick={() => this.props.buttonClick()}
                            style={
                                {                        
                                    width: '70%',
                                    maxWidth: 420,
                                    position: 'absolute',
                                    bottom: '5vh'
                                }
                            } 
                        />                    
                }
            </div>
        );
    }
}