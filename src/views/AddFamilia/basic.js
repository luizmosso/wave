import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import AddView from '../../components/AddView';

export default class AddBasic extends Component {

    changeValue(field, isNumber, event) {
        let campo = {};
        campo[field] = isNumber === true ? parseInt(event.target.value) : event.target.value;
        this.props.updateField(campo);
    }

    componentWillReceiveProps(newProps){        
        if(this.props.data.id !== newProps.data.id) this.refs.id.value = newProps.data.id;
        if(this.props.data.endereco !== newProps.data.endereco) this.refs.endereco.value = newProps.data.endereco;
        if(this.props.data.bairro !== newProps.data.bairro) this.refs.bairro.value = newProps.data.bairro;
        if(this.props.data.telefone !== newProps.data.telefone) this.refs.telefone.value = newProps.data.telefone !== null ? newProps.data.telefone.toString() : '';
        if(this.props.data.documento !== newProps.data.documento) this.refs.documento.value = newProps.data.documento !== null ? newProps.data.documento.toString() : '';
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
                    <label htmlFor="endereco">ENDEREÇO</label>
                    <input className="input input-text" id="endereco" ref="endereco" type="text" placeholder="Rua das Margaridas, 150" onChange={this.changeValue.bind(this, 'endereco', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="bairro">BAIRRO</label>
                    <input className="input input-text" id="bairro" ref="bairro" type="text" placeholder="Urciano Lemos" onChange={this.changeValue.bind(this, 'bairro', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="telefone">TELEFONE</label>
                    <InputMask mask="99999999999" maskChar={null} className="input input-text" id="telefone" ref="telefone" placeholder="3436624878" onChange={this.changeValue.bind(this, 'telefone', true)} />                    
                </div>
                <div className="input-box">
                    <label htmlFor="documento">DOCUMENTO</label>
                    <InputMask mask="99999999999" maskChar={null} className="input input-text" id="documento" ref="documento" placeholder="CPF ou RG" onChange={this.changeValue.bind(this, 'documento', true)} />                                        
                </div>
            </AddView >
        );
    }
}