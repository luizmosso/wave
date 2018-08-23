import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {

    logout() {
        localStorage.removeItem("userData");
    }

    render() {
        const style = {
            link : {
                color: 'lightcyan',
                display: 'flex',                
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 10,
                right: 10,
                fontSize: '3vh'
            },
            icon : {
                fontSize: '4vh'
            }
        }

        return (
            <Link to="/login" className="logout" style={style.link} onClick={this.logout}>
                <i style={style.icon} className="material-icons">exit_to_app</i>
                Sair
            </Link>
        );
    }
}