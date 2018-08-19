import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginActions from '../../actions/login';
import * as notificationActions from '../../actions/notification';

class Login extends Component {
    checkData(email, password) {
        if (email === '' || password === '')
            return false;
        return true;
    }

    doLogin() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        if (this.checkData(email, password))
            this.props.doLogin(email, password);
        else
            this.props.notify(true, "error", "Favor digitar o e-mail e a senha");
    }

    componentWillReceiveProps() {
        if (this.props.login.isLoginSuccess) {
            this.props.history.push('/');
        }
    }
    
    componentWillMount(){
        localStorage.removeItem("userData");
    }

    render() {
        return (
            <div className="login container">
                <div className="background"></div>
                <div className="box">
                    <img src={require('../../content/wave.svg')} style={{ width: 80 }} alt="wave" />
                    <p className="title">Wave </p>
                    <p className="subtitle">A perseverança das ondas do mar, que fazem de cada recuo um ponto de partida para um novo avanço</p>
                    <input className="input input-text" ref="email" type="email" placeholder="E-mail" autoComplete="new-user" />
                    <input className="input input-text input-password" ref="password" type="password" placeholder="Senha" autoComplete="new-password" />
                    <input className="input button" ref="submit" type="button" value="Login" onClick={this.doLogin.bind(this)} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        login: state.login,
        notification: state.notification
    });

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...loginActions,
        ...notificationActions
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);