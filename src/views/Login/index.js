import React, { Component } from 'react';
import InputMic from '../../components/InputMic';
import SpeechRecognitionService from '../../SpeechRecognitionService';

export default class Login extends Component {

    constructor() {
        super();
        this.state = { recording: false, inputText: '' }
        this.recognition = new SpeechRecognitionService();        
    }

    checkData(user, password) {
        if (user === '' || password === '')
            return false;
        return true;
    }

    doLogin() {
        const user = this.refs.use;
        const password = this.refs.password;

        if (this.checkData(user, password))
            this.props.history.push('/');
    }

    startRecording() {
        this.recognition.onResult((inputText, isFinal) => {
            if (isFinal)
                this.setState({ inputText: this.state.inputText + inputText });
        });
        this.recognition.onEnd(() => {
            this.setState({ recording: false });
        });
        this.recognition.start();
        this.setState({ recording: true });
    }

    stopRecording = () => {
        this.setState({ recording: false });
        this.recognition.stop();
    }

    btnRecording_Click() {
        if (this.state.recording) {
            this.stopRecording();
        }
        else {
            this.startRecording();
        }
    }

    render() {
        return (
            <div className="login container">
                <div className="background"></div>
                <div className="box">
                    <p className="title">Wave </p>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <InputMic
                        ref="user"
                        placeholder="Usuário"
                        autoComplete="new-user"
                        value={this.state.inputText}
                        onMicClick={this.btnRecording_Click.bind(this)}
                        onChange={(inputText) => this.setState({ inputText })}
                        isChrome={this.recognition.isChrome()}
                    />
                    <input className="input input-text input-password" ref="password" type="password" placeholder="Senha" autoComplete="new-password" />
                    <input className="input button" ref="submit" type="button" value="Login" onClick={this.doLogin.bind(this)} />
                </div>
            </div>
        );
    }
}