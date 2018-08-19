import React, { Component } from 'react';

export default class InputMic extends Component {

    constructor() {
        super();
        this.state = { micIcon: 'mic_off' }
    }
    onMicClick() {
        const active = "active";

        if (this.refs.mic.classList.contains(active)) {
            this.refs.mic.classList.remove(active);
            this.setState({ micIcon: 'mic_off' });
        }
        else {
            this.refs.mic.classList.add(active);
            this.setState({ micIcon: 'mic' });
        }
        this.props.onMicClick();
    }

    render() {
        return (
            <div className="inputMic">
                <input
                    className="input input-text"
                    type="text"
                    placeholder={this.props.placeholder}
                    autoComplete={this.props.autoComplete}
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)}
                />
                {this.props.isChrome === false ? null : <i ref="mic" className="material-icons" onClick={this.onMicClick.bind(this)}>{this.state.micIcon}</i>}
            </div>
        );
    }
}