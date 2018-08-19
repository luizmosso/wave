import React, { Component } from 'react';

export default class ActionButton extends Component {
    render() {
        return (
            <input 
                type="button" 
                className={`actionButton ${this.props.className}`} 
                onClick={this.props.onClick} 
                style={this.props.style} 
                value={this.props.text} 
            />
        );
    }
}