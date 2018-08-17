import React, { Component } from 'react';

export default class Search extends Component {

    search(toSearch) {
        var results = [];
        if (toSearch !== '' && toSearch.length > 2) {
            for (var i = 0; i < this.props.data.length; i++) {
                for (let key in this.props.data[i]) {
                    if (typeof this.props.data[i][key] !== 'object') {
                        if (this.props.data[i][key].toString().toLowerCase().indexOf(toSearch.toLowerCase()) !== -1) {
                            results.push(this.props.data[i]);
                        }
                    }
                }
            }
        }
        else
            results = this.props.data;

        this.props.searched(results);
    }

    render() {
        const style = {
            container: {
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 20,
                position: 'relative',
                width: '100%',
                maxWidth: 600,
                height: 30
            },
            input: {                
                border: 'none',
                boxShadow: 'rgba(87, 86, 87, 0.4) 3px 8px 18px -11px',
                padding: 10,
                width: '88%',
                height: '100%'
            },
            i: {
                position: 'absolute',
                top: 13,
                right: '5%',
                fontSize: '1.8em',
                color: 'rgba(124, 141, 158, 0.4)'
            }
        }

        return (
            <div className="search" style={style.container}>
                <input type="text" placeholder="Pesquisar" style={style.input} onChange={(e) => this.search(e.target.value)} />
                <i className="material-icons" style={style.i}>search</i>
            </div>
        )
    }
}