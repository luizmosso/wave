import React, { Component } from 'react';

export default class InputDuo extends Component {

    onCloseClick(){
        this.props.onRemove(this.refs.container.id);
    }

    render() {
        return (
            <div ref="container" id={this.props.id} className="input-box input-duo">
                {
                    this.props.hasLabel === false ? null :
                        [
                            <label key="1" htmlFor="benefit-name">{this.props.label1}</label>,
                            <label key="2" htmlFor="benefit-value">{this.props.label2}</label>
                        ]
                }
                <input className="input input-text first" type="text" placeholder={this.props.placeholder1} />
                <input className="input input-text last" type="text" placeholder={this.props.placeholder2} />
                <div className="close" onClick={this.onCloseClick.bind(this)}>+</div>  
            </div>
        );
    }
}