import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import AddView from '../../components/AddView';
import InputDuo from '../../components/InputDuo';

export default class AddRent extends Component {
    constructor() {
        super();
        this.state = { renda: 0, benefits: [], benefitsJSON: [] }
    }

    changeValue(field, isCurrency, value) {
        console.log(value);
        let campo = {};
        campo[field] = isCurrency === true ? parseFloat(value) : value;
        this.setState(campo);
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
                getValue1={(value) => value}
                getValue2={(value) => value}
                onRemove={this.removeBenefit.bind(this)}
                onChange={this.updateBenefitObject.bind(this)}
            />
        )
        this.setState({ benefits });
        this.updateBenefitObject();
    }

    updateBenefitObject(obj, remove) {
        if (obj != null) {
            let newArr = this.state.benefitsJSON.map(a => { return { ...a } })

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

            this.setState({ benefitsJSON: newArr });
            this.props.updateField({ beneficios: newArr });
        }
    }

    removeBenefit(key, obj) {
        let benefits = this.state.benefits;
        benefits.splice(key - 1, 1);
        this.setState({ benefits });
        this.updateBenefitObject(obj, true);
    }

    componentWillReceiveProps(newProps){               
        let renda = newProps.data.renda !== null ? newProps.data.renda.toString() : '';
        this.setState({renda});
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
                        this.state.benefits.map((benefit) => benefit)
                    }
                </div>
            </AddView>
        );
    }
}