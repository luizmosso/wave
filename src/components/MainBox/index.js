import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MainBox extends Component {
    render() {
        return (
            <Link to={this.props.route}>
                <div className="mainbox container" style={{ backgroundImage: `url("${this.props.background}")` }}>
                    <div className="label">
                        <div className="imgContainer">
                            <img alt="icon" src={this.props.icon} />
                        </div>
                        <div className="title">{this.props.label}</div>
                    </div>
                </div>
            </Link>
        );
    }
}