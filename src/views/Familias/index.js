import React, { Component } from 'react';
import { Link } from "react-router-dom";
import List from '../../components/List';
import NavBar from '../../components/NavBar';
import ListItemButton from '../../components/ListItemButton';
import FloatButton from '../../components/FloatButton';


export default class Familias extends Component {

    constructor() {
        super();
        
        this.familias = [
            {left: 'F01', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true },
            {left: 'F02', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true },
            {left: 'F03', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true },
            {left: 'F04', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true },
            {left: 'F05', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true },
            {left: 'F06', up: 'Maria Abadia da Luz', down: 'Rua das Margaridas 180 - Urciano Lemos', right: null, active: true }
        ];
    }

    componentWillMount(){        
        this.familias.forEach((familia) => {
            familia.right = 
            (
                <Link to={`/familias/add/${familia.left}`}>
                    <ListItemButton color="#fbe7ff" backgroundColor="rgb(72, 142, 189)" label="Info" />
                </Link>
            )
        });
    }

    render() {
        return (
            <div className="familias container">
                <NavBar title="FAMÍLIAS" image={require('../../content/family_icon.svg')} backColor="#421666" />
                <List items={this.familias} />
                <FloatButton icon={require('../../content/plus.svg')} backColor="#421666" route="/familias/add" />
            </div>
        );
    }
}