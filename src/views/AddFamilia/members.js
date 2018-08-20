import React, { Component } from 'react';
import AddView from '../../components/AddView';
import InputTrio from '../../components/InputTrio';

export default class AddMembers extends Component {
    constructor() {
        super();
        this.state = { members: [], membersJSON : [] }
    }

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    addMember(nome, nascimento, escolaridade) {
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
                value1={nome}
                value2={nascimento}
                value3={escolaridade}
                onRemove={this.removeMember.bind(this)}
                onChange={this.updateMemberObject.bind(this)}
            />
        );

        this.setState({ members });        
        this.updateMemberObject();
    }


    updateMemberObject(obj, remove) {
        if (obj != null) {
            let newArr = this.state.membersJSON.map(a => { return { ...a } })

            let found = newArr.find(a => a.id === obj.id);

            if (remove) {
                let index = newArr.indexOf(found);
                newArr.splice(index, 1);
            }
            else if (found !== undefined) {
                found.nome = obj.nome;
                found.nascimento = obj.nascimento;
                found.escolaridade = obj.escolaridade;
            }
            else
                newArr.push(obj);

            this.setState({ membersJSON: newArr });
            this.props.updateField({ membros: newArr });
        }
    }

    removeMember(key, obj) {
        let members = this.state.members;
        members.splice(key - 1, 1);
        this.setState({ members });
        this.updateMemberObject(obj, true);
    }

    componentWillReceiveProps(newProps){               
        newProps.data.membros.forEach(
            membro => this.addMember(membro.nome, membro.nascimento, membro.escolaridade)
        );
    }

    render() {
        return (
            <AddView className="add-members" number="3" title="MEMBROS" hasButton={this.props.hasSaveButton} buttonClass="blue" buttonClick={() => this.props.save()}>
                <div className="add-box">
                    <div className="header">NOVO MEMBRO <img onClick={this.addMember.bind(this)} alt="adicionar" src={require('../../content/plus_black.svg')} /></div>
                    {
                        this.state.members.map((member) => member)
                    }
                </div>
            </AddView>
        );
    }
}