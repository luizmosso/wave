import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import AddView from '../../components/AddView';

export default class AddBasic extends Component {

    changeValue(field, isNumber, event) {
        let campo = {};
        campo[field] = isNumber === true ? parseInt(event.target.value) : event.target.value;
        this.props.updateField(campo);
    }

    render() {

        const styleFirst = { backgroundColor: 'rgb(134, 9, 9)', fontSize: '2em' };
        return (
            <AddView className="add-basic" number="1" title="DADOS BÁSICOS" hasButton={this.props.hasSaveButton} buttonClass="red" buttonClick={() => this.props.save()} >
                <div className="input-box">
                    <label htmlFor="id">CÓDIGO</label>                    
                    <input style={styleFirst} className="input input-text" id="id" ref="id" type="text" placeholder="F120" onChange={this.changeValue.bind(this, 'id', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="address">ENDEREÇO</label>
                    <input className="input input-text" id="address" ref="address" type="text" placeholder="Rua das Margaridas, 150" onChange={this.changeValue.bind(this, 'endereco', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="district">BAIRRO</label>
                    <input className="input input-text" id="district" ref="district" type="text" placeholder="Urciano Lemos" onChange={this.changeValue.bind(this, 'bairro', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="phone">TELEFONE</label>
                    <InputMask mask="99999999999" maskChar={null} className="input input-text" id="phone" ref="phone" placeholder="(34)36624878" onChange={this.changeValue.bind(this, 'telefone', true)} />                    
                </div>
                <div className="input-box">
                    <label htmlFor="document">DOCUMENTO</label>
                    <InputMask mask="99999999999" maskChar={null} className="input input-text" id="document" ref="document" placeholder="CPF ou RG" onChange={this.changeValue.bind(this, 'documento', true)} />                                        
                </div>
            </AddView >
        );
    }
}