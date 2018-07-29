import React, { Component } from 'react';
import ActionButton from '../ActionButton';

export default class AddView extends Component {

    back(){ 
        this.props.history.push('/familias');   
    }

    render() {
        return (
            <div className={`addView ${this.props.className}`}>
                <div className="pass">{this.props.number}</div>
                <div className="close" onClick={this.back.bind(this)}>+</div>
                <div className="title">
                    {this.props.title}
                </div>
                {this.props.children}
                {
                    this.props.hasButton === false ? null :
                        <ActionButton 
                            className={this.props.buttonClass}  
                            text="Salvar" 
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