import React, { Component } from 'react';

export default class AddRent extends Component {

    changeValue(field, event){
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    render() {

        // const familia = {
        //     // Renda
        //     rendaMensal: 350.00,
        //     beneficios: [
        //         { nome: 'Bolsa Família', valor: 150.00 },
        //         { nome: 'Pensão', valor: 80.00 },
        //     ],
        // };

        return (
            <div className="add-rent addFamiliaBox">
                <div className="pass">2</div>
                <div className="title">
                    RENDA 
                </div>
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
            </div>
        );
    }
}