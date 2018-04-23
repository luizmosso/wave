import React, { Component } from 'react';

export default class MainBox extends Component {

    click(){
        console.log(this.props);
        this.props.history.push(this.props.route);
    }

    render() {
        return (
            <div className="mainbox container" onClick={this.click.bind(this)} style={{ backgroundImage: `url("${this.props.background}")` }}>
                <div className="label">
                    <div className="imgContainer">
                        <img alt="icon" src={this.props.icon} />
                    </div>
                    <div className="title">{this.props.label}</div>
                </div>
            </div>
        );
    }
}