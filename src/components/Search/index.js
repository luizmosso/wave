import React, { Component } from 'react';

export default class Search extends Component {

    search(toSearch) {
        var results = [];
        if (toSearch !== '' && toSearch.length > 2) {
            for (var i = 0; i < this.props.data.length; i++) {
                for (let key in this.props.data[i]) {
                    if (typeof this.props.data[i][key] !== 'object') {
                        if (this.props.data[i][key] !== undefined)
                            if (this.props.data[i][key].toString().toLowerCase().indexOf(toSearch.toLowerCase()) !== -1) {
                                results.push(this.props.data[i]);
                            }
                    }
                }
            }
        }
        else
            results = this.props.data;

        results = results.filter((item, pos) => results.indexOf(item) === pos);
        this.props.searched(results);
    }

    render() {
        const style = {
            container: {
                position: 'relative',
                width: '100%',                
                marginTop: '4vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            input: {             
                width: '100%',
                maxWidth: 450,
                height: '5vh',
                maxHeight: 30,
                border: 'none',
                boxShadow: 'rgba(87, 86, 87, 0.4) 3px 8px 18px -11px',
                padding: 10,
                zIndex: 9
            },
            material_container: {                
                width: '100%',
                maxWidth: 450,
                position: 'absolute',
                display: 'flex',
                justifyContent: 'flex-end'
            },
            i: {
                fontSize: '1.8rem',
                color: 'rgba(124, 141, 158, 0.4)',
                zIndex: 10
            }
        }

        return (
            <div className="search" style={style.container}>
                <div style={style.material_container}>
                    <i className="material-icons" style={style.i}>search</i>
                </div>
                <input type="text" placeholder="Pesquisar" style={style.input} onChange={(e) => this.search(e.target.value)} />
                
            </div>
        )
    }
}