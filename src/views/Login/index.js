import React, { Component } from 'react';
// import Logics from '../../logics';

export default class Login extends Component {
    // constructor(){
    //     super();
    //     const logics = new Logics();
    // }

    checkData(user, password) {
        if (user === '' || password === '')
            return false;
        return true;
    }

    doLogin() {
        const user = this.refs.use;
        const password = this.refs.password;

        if(this.checkData(user, password))
            this.props.history.push('/');  
    }

    render() {
        return (
            <div className="login container">
                <div className="background"></div>
                <div className="box">
                    <p className="title">Wave </p>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <input className="input input-text" ref="user" type="text" placeholder="Usuário" autoComplete="new-user" />
                    <input className="input input-text input-password" ref="password" type="password" placeholder="Senha" autoComplete="new-password" />
                    <input className="input button" ref="submit" type="button" value="Login" onClick={this.doLogin.bind(this)} />
                </div>
            </div>
        );
    }
}