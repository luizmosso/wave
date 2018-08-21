import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {

        let ativoStyle = {backgroundColor : this.props.active === true ? '#393966' : '#a26060'}

        return (
            <li className="listitem container">
                <div style={ativoStyle} className="left">{this.props.left}</div>
                <div className="inside">
                    <div className="inside-left">
                        <div className="up">{this.props.up}</div>
                        <div className="down">{this.props.down}</div>
                    </div>
                    <div className="inside-right">
                        <div className="right">{this.props.right}</div>
                    </div>
                </div>
            </li>
        );
    }
}