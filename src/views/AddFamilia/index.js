import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as familiaActions from '../../actions/familia';
import * as notificationActions from '../../actions/notification';
import ReactSwipe from 'react-swipe';
import AddBasic from './basic';
import AddRent from './rent';
import AddMembers from './members';
import AddAttendance from './attendance';

class AddFamilia extends Component {
    constructor() {
        super();

        this.state = {
            endereco: '',
            bairro: '',
            telefone: '',
            documento: '',
            renda: '',
            beneficios: [],
            membros: [],
            observacao: '',
            tempoAtendimento: '',
            id: '',
            ativa: true,
            dataCadastro: '',
            dataAtivacao: []
        };
    }

    next() {
        this.reactSwipe.next();
    }

    prev() {
        this.reactSwipe.prev();
    }

    updateField(field) {
        this.setState(field);
    }

    save() {
        this.props.insertFamilia(this.state, () => {
            this.props.notify(true, "success", "Família Inserida com sucesso");
            this.props.history.push('/familias');
        })
    }

    render() {
        console.log(this.state);
        const hasButton = this.props.match.params.id !== undefined ? true : false;
        return (
            <div className="addFamilia">
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{ continuous: false }}>
                    <div style={{ height: '100%' }}>
                        <AddBasic updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddRent updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddMembers updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddAttendance updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={true} />
                    </div>
                </ReactSwipe>

                <div className="navButtons">
                    <img className="prev" alt="Voltar" src={require('../../content/back.svg')} onClick={this.prev.bind(this)} />
                    <img className="next" alt="Avançar" src={require('../../content/next.svg')} onClick={this.next.bind(this)} />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => (
    {
        familia: state.familia,
        notification: state.notification
    });

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...familiaActions,
        ...notificationActions
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddFamilia);