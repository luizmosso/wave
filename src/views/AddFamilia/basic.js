import React, { Component } from 'react';
import AddView from '../../components/AddView';

export default class AddBasic extends Component {

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    render() {
        return (
            <AddView history={this.props.history} className="add-basic" number="1" title="DADOS BÁSICOS" hasButton={this.props.hasSaveButton} buttonClass="red">
                <div className="input-box">
                    <label htmlFor="address">ENDEREÇO</label>
                    <input className="input input-text" id="address" ref="address" type="text" placeholder="Rua das Margaridas, 150" onChange={this.changeValue.bind(this, 'endereco')} />
                </div>
                <div className="input-box">
                    <label htmlFor="district">BAIRRO</label>
                    <input className="input input-text" id="district" ref="district" type="text" placeholder="Urciano Lemos" onChange={this.changeValue.bind(this, 'bairro')} />
                </div>
                <div className="input-box">
                    <label htmlFor="phone">TELEFONE</label>
                    <input className="input input-text" id="phone" ref="phone" type="text" placeholder="3436624878" onChange={this.changeValue.bind(this, 'telefone')} />
                </div>
                <div className="input-box">
                    <label htmlFor="document">DOCUMENTO</label>
                    <input className="input input-text" id="document" ref="document" type="text" placeholder="CPF ou RG" onChange={this.changeValue.bind(this, 'documento')} />
                </div>
            </AddView >
        );
    }
}