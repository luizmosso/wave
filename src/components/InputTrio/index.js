import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class InputTrio extends Component {

    onCloseClick() {
        this.props.onRemove(
            this.refs.container.id,
            { 
                id: this.props.id, 
                nome: this.refs.input1.value, 
                nascimento: this.refs.input2.value,
                escolaridade: this.refs.input3.value 
            }
        );
    }

    onChange() {
        this.props.onChange(
            { 
                id: this.props.id, 
                nome: this.refs.input1.value, 
                nascimento: this.refs.input2.value,
                escolaridade: this.refs.input3.value 
            }
        );
    }

    render() {
        return (
            <div ref="container" id={this.props.id} className="input-box input-trio">      
                <div className="close" onClick={this.onCloseClick.bind(this)}>+</div>  
                {
                    this.props.hasLabel === false ? null :
                        [
                            <label key="1" className="first" htmlFor="member-name">{this.props.label1}</label>,
                            <label key="2" className="last" htmlFor="member-nascimento">{this.props.label2}</label>                            
                        ]
                }
                <input ref="input1" onChange={this.onChange.bind(this)} className="input input-text first" type="text" placeholder={this.props.placeholder1} />
                <InputMask mask="99/99/9999" maskChar={null} className="input input-text last" ref="input2" placeholder={this.props.placeholder2} onChange={this.onChange.bind(this)} />                                    
                <input ref="input3" onChange={this.onChange.bind(this)} className="input input-text third" type="text" placeholder={this.props.placeholder3} />
            </div>
        );
    }
}