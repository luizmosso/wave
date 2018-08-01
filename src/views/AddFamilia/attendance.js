import React, { Component } from 'react';
import AddView from '../../components/AddView';

export default class AddAttendance extends Component {

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    render() {

        // const familia = {
        //     // Atendimento
        //     observacao: 'Esta familia tem um deficiente físico e precisa de fraldas geriátricas',
        //     tempoAtendimento: 6,
        //     grupo: 1,
        // };

        const obs_style = { height: 150, borderRadius: 17 };
        const items_style = { height: 100, borderRadius: 17 };

        return (
            <AddView className="add-attendance" number="4" title="ATENDIMENTO" hasButton={this.props.hasSaveButton} buttonClass="beige">
                <div className="input-box">
                    <label htmlFor="obs">OBSERVAÇÃO</label>
                    <textarea style={obs_style} className="input input-text" id="obs" ref="obs" placeholder="Essa família possui um deficiente físico" onChange={this.changeValue.bind(this, 'observacao')} />
                </div>
                <div className="input-box">
                    <label htmlFor="time">TEMPO DE ATENDIMENTO</label>
                    <input className="input input-text" id="time" ref="time" type="text" placeholder="6 meses" onChange={this.changeValue.bind(this, 'tempoAtendimento')} />
                </div>
                <div className="input-box">
                    <label htmlFor="items">ITENS A SEREM DOADOS</label>
                    <textarea style={items_style} className="input input-text" id="items" ref="items" placeholder="1 Cesta Básica, 1 pacote de fraldas" onChange={this.changeValue.bind(this, 'itensDoados')} />
                </div>
            </AddView>
        );
    }
}