import React, { Component } from 'react';
import List from '../../components/List';
import NavBar from '../../components/NavBar';
import ListItemButton from '../../components/ListItemButton';
import FloatButton from '../../components/FloatButton';


export default class Familias extends Component {

    constructor() {
        super();

        const Button = <ListItemButton color="#fbe7ff" backgroundColor="#c688d3" label="Info" />
        this.familias = [
            { left: 'F01', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: Button, active: true },
            { left: 'F02', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: Button, active: false },
            { left: 'F04', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: Button, active: true },
            { left: 'F05', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: Button, active: false },
            { left: 'F06', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: Button, active: true },
        ]
    }

    back(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="familias container">
                <NavBar history={this.props.history} title="FAMÍLIAS" image={require('../../content/family_icon.svg')} backColor="#421666" />
                <List items={this.familias} />
                <FloatButton history={this.props.history} icon={require('../../content/plus.svg')} backColor="#421666" route="/familias/add" />
            </div>
        );
    }
}