import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        const styles = { backgroundColor: this.props.backColor };

        return (
            <div className="navbar container" style={styles} >
                <Link to={"/"}>
                    <div className="img">
                        <img alt="Voltar" src={require('../../content/back.svg')} />
                    </div>
                </Link>
                <div className="text">
                    <img alt={this.props.title} src={this.props.image} />
                    {this.props.title}
                </div>
            </div>
        );
    }
}