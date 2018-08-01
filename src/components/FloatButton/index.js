import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class FloatButton extends Component {
    render() {
        const styles = { backgroundColor: this.props.backColor };

        return (
            <Link to={this.props.route}>
                <div className="floatbutton" style={styles} >
                    <img alt='floating' src={this.props.icon} />
                </div>
            </Link>
        );
    }
}