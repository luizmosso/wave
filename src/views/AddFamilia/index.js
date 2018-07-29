import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import AddBasic from './basic';
import AddRent from './rent';
import AddMembers from './members';
import AddAttendance from './attendance';

export default class AddFamilia extends Component {
    constructor() {
        super();

        this.state = {
            // Dados básicos
            endereco: 'Rua das Camelias, 189',
            bairro: 'São Geraldo',
            telefone: 999864154,
            documento: '0847415624',

            // Renda
            rendaMensal: 350.00,
            beneficios: [
                { nome: 'Bolsa Família', valor: 150.00 },
                { nome: 'Pensão', valor: 80.00 },
            ],

            // Membros
            membros: [
                { nome: 'José afonso Barbosa', nascimento: '11/11/1980', escolaridade: 'Ensino Fundamental Completo', responsavel: true },
                { nome: 'Maria das Dores Barbosa', nascimento: '05/08/1975', escolaridade: 'Ensino Fundamental Incompleto', responsavel: false },
                { nome: 'Cauã Barbosa da Silva', nascimento: '15/01/2005', escolaridade: null, responsavel: false },
            ],

            // Atendimento
            observacao: 'Esta familia tem um deficiente físico e precisa de fraldas geriátricas',
            tempoAtendimento: 6,
            grupo: 1,

            // Sistema
            id: 'F01',
            ativa: true,
            dataCadastro: '01/01/2018',
            dataAtivacao: ['01/01/2018', '01/01/2019']
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

    render() {

        const hasButton = this.props.history.hash !== null ? true : false;
        return (
            <div className="addFamilia">
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{ continuous: false }}>
                    <div style={{ height: '100%' }}>
                        <AddBasic history={this.props.history} updateField={this.updateField.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddRent history={this.props.history} updateField={this.updateField.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddMembers history={this.props.history} updateField={this.updateField.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddAttendance history={this.props.history} updateField={this.updateField.bind(this)} hasSaveButton={true} />
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