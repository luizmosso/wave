import React, { Component } from 'react';
import Switch from 'rc-switch';
import InputMask from 'react-input-mask';
import AddView from '../../components/AddView';

export default class AddAttendance extends Component {

    changeValue(field, isNumber, event) {
        let campo = {};
        campo[field] = isNumber === true ? parseInt(event.target.value) : event.target.value;
        this.props.updateField(campo);
    }

    switchChange(e) {
        this.props.updateField({ ativo: e });
    }

    componentWillReceiveProps(newProps) {
        this.refs.observacao.value = newProps.data.observacao;
        this.refs.tempoAtendimento.value = newProps.data.tempoAtendimento !== null ? newProps.data.tempoAtendimento.toString() : '';
        this.refs.itensDoados.value = newProps.data.itensDoados;        
        this.refs.ativo.state.checked = newProps.data.ativo;     
    }

    render() {
        const obs_style = { backgroundColor: '#A67313', height: 150, borderRadius: 5, maxHeight: 200 };
        const items_style = { height: 100, borderRadius: 5, maxHeight: 200  };
        const switch_style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 0,
            marginBottom: 20
        }

        return (
            <AddView className="add-attendance" number="4" title="ATENDIMENTO" hasButton={this.props.hasSaveButton} buttonClass="beige" buttonClick={() => this.props.save()}>
                <div className="input-box">
                    <label htmlFor="observacao">OBSERVAÇÃO</label>
                    <textarea  style={obs_style} className="input input-text" id="observacao" ref="observacao" placeholder="Essa família possui um deficiente físico" onChange={this.changeValue.bind(this, 'observacao', false)} />
                </div>
                <div className="input-box">
                    <label htmlFor="tempoAtendimento">TEMPO DE ATENDIMENTO</label>
                    <InputMask mask="999999" maskChar={null} className="input input-text" id="tempoAtendimento" ref="tempoAtendimento" placeholder="em meses" onChange={this.changeValue.bind(this, 'tempoAtendimento', true)} />
                </div>
                <div className="input-box">
                    <label htmlFor="itensDoados">ITENS A SEREM DOADOS</label>
                    <textarea style={items_style} className="input input-text" id="itensDoados" ref="itensDoados" placeholder="1 Cesta Básica, 1 pacote de fraldas" onChange={this.changeValue.bind(this, 'itensDoados', false)} />
                </div>
                <div className="input-box" style={switch_style}>
                    <label htmlFor="ativo" style={{ marginRight: 15 }}>SITUAÇÃO</label>
                    <Switch ref="ativo" id="ativo" onChange={this.switchChange.bind(this)} checkedChildren={'ativa'} unCheckedChildren={'inativa'} />
                </div>
            </AddView>
        );
    }
}