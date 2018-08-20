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
            telefone: 0,
            documento: 0,
            renda: 0,
            beneficios: [],
            membros: [],
            observacao: '',
            tempoAtendimento: 0,
            id: '',
            ativa: true,
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
        let familia = this.state; 
        for (let b = 0; b < familia.beneficios.length; b++) {
            let beneficio = familia.beneficios[b];
            delete beneficio.id;
        }

        for (let m = 0; m < familia.membros.length; m++) {
            let membro = familia.membros[m];
            delete membro.id;
            membro.nascimento = this.stringToDate(membro.nascimento);
        }

        if(familia._id){
            this.props.updateFamilia(familia, () => {
                this.props.notify(true, "success", "Família Atualizada com sucesso");
                this.props.history.push('/familias');
            })
        }
        else{
            this.props.insertFamilia(familia, () => {
                this.props.notify(true, "success", "Família Inserida com sucesso");
                this.props.history.push('/familias');
            })
        }
    }

    dateToString(date){
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
    }

    stringToDate(stringDate){
        let arr = stringDate.split('/');
        return new Date(arr[2], (parseInt(arr[1]) - 1).toString(), arr[0]);
    }

    componentDidMount(){        
        if(this.props.match.params.id){            
            let familia = this.props.familia.familias.find(f => f.id === this.props.match.params.id);
            
            for (let b = 0; b < familia.beneficios.length; b++) {
                familia.beneficios[b].id = b;                
            }

            for (let m = 0; m < familia.membros.length; m++) {
                familia.membros[m].id = m; 
                familia.membros[m].nascimento = this.dateToString(new Date(familia.membros[m].nascimento));                              
            } 
            this.setState(familia);
        }
    }

    render() {        
        const hasButton = this.props.match.params.id !== undefined ? true : false;
        return (
            <div className="addFamilia">
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{ continuous: false }}>
                    <div style={{ height: '100%' }}>
                        <AddBasic data={this.state} updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddRent data={this.state} updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddMembers data={this.state} updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={hasButton} />
                    </div>
                    <div style={{ height: '100%' }}>
                        <AddAttendance data={this.state} updateField={this.updateField.bind(this)} save={this.save.bind(this)} hasSaveButton={true} />
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