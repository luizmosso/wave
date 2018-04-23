import React, { Component } from 'react';
import ListItem from '../ListItem';

export default class List extends Component {
    render() {
        return (
            <ul className="list container" >
                {
                    this.props.items.map((item) => <ListItem key={item.left} {...item} />)
                }
            </ul>
        );
    }
}