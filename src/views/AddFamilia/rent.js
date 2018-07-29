import React, { Component } from 'react';
import AddView from '../../components/AddView';
import InputDuo from '../../components/InputDuo';

export default class AddRent extends Component {
    constructor() {
        super();
        this.state = { benefits: [] }
    }

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    addBenefit() {
        let benefits = this.state.benefits;
        benefits.push(
            <InputDuo
                key={benefits.length + 1}
                id={benefits.length + 1}
                hasLabel={benefits.length === 0 ? true : false}
                label1="NOME"
                placeholder1="Bolsa Família"
                label2="VALOR"
                placeholder2="R$"
                onRemove={this.removeBenefit.bind(this)}
            />
        )
        this.setState({ benefits });
    }

    removeBenefit(key) {
        let benefits = this.state.benefits;
        benefits.splice(key - 1, 1);
        this.setState({ benefits });
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
            <AddView history={this.props.history} className="add-rent" number="2" title="RENDA" hasButton={this.props.hasSaveButton} buttonClass="green">
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
            </AddView>
        );
    }
}