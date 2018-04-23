import React, { Component } from 'react';

export default class FloatButton extends Component {
    click() {
        this.props.history.push(this.props.route);
    }

    render() {
        const styles = { backgroundColor: this.props.backColor };

        return (
            <div className="floatbutton" style={styles} onClick={this.click.bind(this)} >
                <img alt='floating' src={this.props.icon} />
            </div>
        );
    }
}