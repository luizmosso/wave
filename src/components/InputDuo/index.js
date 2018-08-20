import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

export default class InputDuo extends Component {
    constructor(props){
        super(props);
        this.state = {input2 : this.props.value2 !== null ? parseFloat(this.props.value2) : 0}
    }

    onCloseClick() {
        this.props.onRemove(this.refs.container.id);
    }

    onChange() {        
        this.props.onChange(
            { id: this.props.id, nome: this.refs.input1.value, valor: parseFloat(this.refs.input2.theInput.value) }
        );
        this.setState({input2: parseFloat(this.refs.input2.theInput.value)});
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
                <input 
                    ref="input1" 
                    onChange={this.onChange.bind(this)} 
                    className="input input-text first" 
                    type="text" 
                    placeholder={this.props.placeholder1} 
                    value={this.props.value1 != null ? this.props.value1 : ''} 
                />
                <CurrencyInput 
                    thousandSeparator="" 
                    value={this.state.input2} 
                    className="input input-text last" 
                    ref="input2" 
                    inputType="text" 
                    onChange={this.onChange.bind(this)} 
                />                                    
                <div className="close" onClick={this.onCloseClick.bind(this)}>+</div>
            </div>
        );
    }
}