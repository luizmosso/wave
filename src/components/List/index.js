import React, { Component } from 'react';
import ListItem from '../ListItem';

export default class List extends Component {
    render() {
        let listStyle = {}

        if (this.props.maxHeight)
            listStyle = { maxHeight: this.props.maxHeight, overflowY: 'auto' };


        return (
            <ul className="list container" style={listStyle} >
                {
                    this.props.items.map((item) => <ListItem key={item.left} {...item} />)
                }
            </ul>
        );
    }
}