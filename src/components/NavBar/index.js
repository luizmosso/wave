import React, { Component } from 'react';

export default class NavBar extends Component {
    back() {
        this.props.history.push('/');
    }

    render() {

        const styles = { backgroundColor: this.props.backColor };

        return (
            <div className="navbar container" style={styles} >
                <div className="img" onClick={this.back.bind(this)}>
                    <img alt="Voltar" src={require('../../content/back.svg')} />
                </div>
                <div className="text">
                    <img alt={this.props.title} src={this.props.image} />
                    {this.props.title}
                </div>
            </div>
        );
    }
}