import React, { Component } from 'react';
import InputDuo from '../../components/InputDuo';

export default class AddRent extends Component {
    constructor(){
        super();
        this.state = {benefits : []}
    }

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    addBenefit(){
        let benefits = this.state.benefits;
        benefits.push(<InputDuo key={benefits.length + 1} hasLabel={benefits.length === 0 ? true : false}  label1="NOME" placeholder1="Bolsa Família" label2="VALOR" placeholder2="R$" />)
        this.setState({benefits});
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
                    <label htmlFor="rent">GANHOS MENSAIS</label>
                    <input className="input input-text" id="rent" ref="rent" type="text" placeholder="R$" onChange={this.changeValue.bind(this, 'rendaMensal')} />
                </div>
                <div className="add-box">
                    <div className="header">BENEFÍCIOS <img onClick={this.addBenefit.bind(this)} alt="adicionar" src={require('../../content/plus_black.svg')} /></div>
                    {
                        this.state.benefits.map((benefit) => benefit)
                    }
                </div>
            </div>
        );
    }
}