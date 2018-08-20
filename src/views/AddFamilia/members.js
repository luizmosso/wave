import React, { Component } from 'react';
import AddView from '../../components/AddView';
import InputTrio from '../../components/InputTrio';

export default class AddMembers extends Component {
    constructor() {
        super();
        this.state = { membros: [] }
    }

    changeValue(field, event) {
        let campo = {};
        campo[field] = event.target.value;
        this.props.updateField(campo);
    }

    addMember() {
        let membros = this.state.membros;
        let newMember = { nome : '', nascimento : '', escolaridade: '', id: membros.length };        
        this.updateMemberObject(newMember);        
    }

    updateMemberObject(obj, remove) {
        if (obj != null) {
            let newArr = this.state.membros.map(a => { return { ...a } })
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

            this.setState({ membros: newArr });
            this.props.updateField({ membros: newArr });
        }
    }

    removeMember(key) {
        let membro = this.state.membros.find(f => f.id === parseInt(key));
        this.updateMemberObject(membro, true);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.data.membros !== newProps.data.membros) {
            this.setState({ membros: newProps.data.membros });
        }
    }

    render() {
        return (
            <AddView className="add-members" number="3" title="MEMBROS" hasButton={this.props.hasSaveButton} buttonClass="blue" buttonClick={() => this.props.save()}>
                <div className="add-box">
                    <div className="header">NOVO MEMBRO <img onClick={this.addMember.bind(this)} alt="adicionar" src={require('../../content/plus_black.svg')} /></div>
                    {
                        this.state.membros.length === 0 ? null :
                            this.state.membros.map((membro) =>
                                <InputTrio
                                    key={membro.id}
                                    id={membro.id}
                                    hasLabel={membro.id === 0 ? true : false}
                                    label1="NOME"
                                    placeholder1="José da Silva"
                                    label2="NASCIMENTO"
                                    placeholder2="01/01/1990"
                                    placeholder3="Ensino Fundamental Incompleto"
                                    value1={membro.nome}
                                    value2={membro.nascimento}
                                    value3={membro.escolaridade}
                                    onRemove={this.removeMember.bind(this)}
                                    onChange={this.updateMemberObject.bind(this)}
                                />
                            )
                    }
                </div>
            </AddView>
        );
    }
}