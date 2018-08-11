import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {

    logout() {
        localStorage.removeItem("userData");
    }

    render() {
        const style = {
            color: 'lightcyan',
            display: 'flex',
            width: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: 10,
            right: 10
        }

        return (
            <Link to="/login" className="logout" style={style} onClick={this.logout}>
                <i className="material-icons">exit_to_app</i>
                Sair
            </Link>
        );
    }
}