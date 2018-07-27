import React, { Component } from 'react';
import InputTrio from '../../components/InputTrio';

export default class AddMembers extends Component {
    constructor(){
        super();
        this.state = {members : []}
    }

    changeValue(field, event){
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    addMember(){
        let members = this.state.members;
        members.push(
            <InputTrio 
                key={members.length + 1} 
                id={members.length + 1} 
                hasLabel={members.length === 0 ? true : false}  
                label1="NOME" 
                placeholder1="José da Silva" 
                label2="NASCIMENTO" 
                placeholder2="01/01/1990"
                placeholder3="Ensino Fundamental Incompleto"
                onRemove={this.removeMember.bind(this)} 
            />
        );

        this.setState({members});
    }

    removeMember(key){        
        let members = this.state.members;
        members.splice(key -1, 1);
        this.setState({members});
    }

    render() {

        // const familia = {
        //     // Membros
        //     membros: [
        //         { nome: 'José afonso Barbosa', nascimento: '11/11/1980', escolaridade: 'Ensino Fundamental Completo', responsavel: true },
        //         { nome: 'Maria das Dores Barbosa', nascimento: '05/08/1975', escolaridade: 'Ensino Fundamental Incompleto', responsavel: false },
        //         { nome: 'Cauã Barbosa da Silva', nascimento: '15/01/2005', escolaridade: null, responsavel: false },
        //     ],
        // };

        return (
            <div className="add-members addFamiliaBox">
                <div className="pass">3</div>
                <div className="title">
                    MEMBROS 
                </div>
                <div className="add-box">
                    <div className="header">NOVO MEMBRO <img onClick={this.addMember.bind(this)} alt="adicionar" src={require('../../content/plus_black.svg')} /></div>
                    {
                        this.state.members.map((member) => member)
                    }
                </div>
            </div>
        );
    }
}