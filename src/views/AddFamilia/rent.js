import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import AddView from '../../components/AddView';
import InputDuo from '../../components/InputDuo';

export default class AddRent extends Component {
    constructor() {
        super();
        this.state = { renda: 0, beneficios: [] }
    }

    changeValue(field, isCurrency, value) {
        let campo = {};
        campo[field] = isCurrency === true ? parseFloat(value) : value;
        this.setState(campo);
        this.props.updateField(campo);
    }

    addBenefit() {
        let beneficios = this.state.beneficios;
        let newBenefit = { nome: '', valor: '', id: beneficios.length };
        this.updateBenefitObject(newBenefit);
    }

    updateBenefitObject(obj, remove) {
        if (obj != null) {
            let newArr = this.state.beneficios.map(a => { return { ...a } })
            let found = newArr.find(a => a.id === obj.id);
            if (remove) {
                let index = newArr.indexOf(found);
                newArr.splice(index, 1);
            }
            else if (found !== undefined) {
                found.nome = obj.nome;
                found.valor = obj.valor;
            }
            else
                newArr.push(obj);

            this.setState({ beneficios: newArr });
            this.props.updateField({ beneficios: newArr });
        }
    }

    removeBenefit(key) {
        let beneficio = this.state.beneficios.find(f => f.id === parseInt(key));
        this.updateBenefitObject(beneficio, true);
    }


    componentWillReceiveProps(newProps) {
        if (this.props.data.renda !== newProps.data.renda) {
            let renda = newProps.data.renda !== null ? newProps.data.renda.toString() : '';
            this.setState({ renda });
        }

        if (this.props.data.beneficios !== newProps.data.beneficios) {
            this.setState({ beneficios: newProps.data.beneficios });
        }
    }

    render() {
        return (
            <AddView className="add-rent" number="2" title="RENDA" hasButton={this.props.hasSaveButton} buttonClass="green" buttonClick={() => this.props.save()}>
                <div className="input-box">
                    <label htmlFor="rent">GANHOS MENSAIS</label>
                    <CurrencyInput thousandSeparator="" value={this.state.renda} className="input input-text" id="renda" ref="renda" inputType="text" placeholder="R$" onChange={this.changeValue.bind(this, 'renda', true)} />
                </div>
                <div className="add-box">
                    <div className="header">BENEFÍCIOS <img onClick={this.addBenefit.bind(this)} alt="adicionar" src={require('../../content/plus_black.svg')} /></div>
                    {
                        this.state.beneficios.length === 0 ? null :
                            this.state.beneficios.map((beneficio) =>
                                <InputDuo
                                    key={beneficio.id}
                                    id={beneficio.id}
                                    hasLabel={beneficio.id === 0 ? true : false}
                                    label1="NOME"
                                    placeholder1="Bolsa Família"
                                    label2="VALOR"
                                    placeholder2="R$"
                                    value1={beneficio.nome}
                                    value2={beneficio.valor}
                                    onRemove={this.removeBenefit.bind(this)}
                                    onChange={this.updateBenefitObject.bind(this)}
                                />
                            )
                    }
                </div>
            </AddView>
        );
    }
}