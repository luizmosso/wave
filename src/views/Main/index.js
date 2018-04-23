import React, { Component } from 'react';
import MainBox from '../../components/MainBox';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.boxes = [
            { route: "/familias", key: 'familias', label: 'Famílias', icon: require('../../content/family_icon.svg'), background: 'family.png' },
            { route: "/doacoes", key: 'doacoes', label: 'Doações', icon: require('../../content/donation_icon.svg'), background: 'donations.png' },
            { route: "/financeiro", key: 'financeiro', label: 'Financeiro', icon: require('../../content/finances_icon.svg'), background: './finances.png' },
            { route: "/eventos", key: 'eventos', label: 'Eventos', icon: require('../../content/events_icon.svg'), background: 'events.png' }
        ]
    }
    
    render() {
        return (
            <div className="main container">
                <div className="main-title">Principal</div>
                <div className="group-box">
                    {this.boxes.map((box) => <MainBox history={this.props.history} {...box} />)}
                </div>
            </div>
        );
    }
}