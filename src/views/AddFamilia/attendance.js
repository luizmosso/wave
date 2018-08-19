import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import AddView from '../../components/AddView';

export default class AddAttendance extends Component {

    changeValue(field, isNumber, event) {
        let campo = {};
        campo[field] = isNumber === true ? parseInt(event.target.value) : event.target.value;
        this.props.updateField(campo);
    }

    render() {
        const obs_style = {  backgroundColor: '#A67313', height: 150, borderRadius: 17 };
        const items_style = { height: 100, borderRadius: 17 };        

        return (            
            <AddView className="add-attendance" number="4" title="ATENDIMENTO" hasButton={this.props.hasSaveButton} buttonClass="beige" buttonClick={() => this.props.save()}>
                <div className="input-box">
                    <label htmlFor="obs">OBSERVAÇÃO</label>
                    <textarea style={obs_style} className="input input-text" id="obs" ref="obs" placeholder="Essa família possui um deficiente físico" onChange={this.changeValue.bind(this, 'observacao', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="time">TEMPO DE ATENDIMENTO</label>
                    <InputMask mask="999999" maskChar={null} className="input input-text" id="time" ref="time" placeholder="em meses" onChange={this.changeValue.bind(this, 'tempoAtendimento', true)} />                                                        
                </div>
                <div className="input-box">
                    <label htmlFor="items">ITENS A SEREM DOADOS</label>
                    <textarea style={items_style} className="input input-text" id="items" ref="items" placeholder="1 Cesta Básica, 1 pacote de fraldas" onChange={this.changeValue.bind(this, 'itensDoados', false)} />
                </div>
            </AddView>
        );
    }
}