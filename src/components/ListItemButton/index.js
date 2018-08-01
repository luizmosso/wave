import React, { Component } from 'react';

export default class ListItemButton extends Component {
    render() {

        let styles = {
            backgroundColor : this.props.backgroundColor,
            color: this.props.color
        };

        return (
            <input className="listItemButton" type="button" value={this.props.label} style={styles} />
        );
    }
}