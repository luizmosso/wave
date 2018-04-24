import React, { Component } from 'react';

export default class InputDuo extends Component {
    render() {
        return (
            <div className="input-box input-duo">
                {
                    this.props.hasLabel === false ? null :
                        [
                            <label htmlFor="benefit-name">{this.props.label1}</label>,
                            <label htmlFor="benefit-value">{this.props.label2}</label>
                        ]
                }
                <input className="input input-text first" type="text" placeholder={this.props.placeholder1} />
                <input className="input input-text last" type="text" placeholder={this.props.placeholder2} />
            </div>
        );
    }
}