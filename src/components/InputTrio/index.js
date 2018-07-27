import React, { Component } from 'react';

export default class InputTrio extends Component {

    onCloseClick(){
        this.props.onRemove(this.refs.container.id);
    }

    render() {
        return (
            <div ref="container" id={this.props.id} className="input-box input-trio">      
                <div className="close" onClick={this.onCloseClick.bind(this)}>+</div>  
                {
                    this.props.hasLabel === false ? null :
                        [
                            <label key="1" className="first" htmlFor="member-name">{this.props.label1}</label>,
                            <label key="2" className="last" htmlFor="member-nascimento">{this.props.label2}</label>                            
                        ]
                }
                <input className="input input-text first" type="text" placeholder={this.props.placeholder1} />
                <input className="input input-text last" type="text" placeholder={this.props.placeholder2} />                
                <input className="input input-text third" type="text" placeholder={this.props.placeholder3} />
            </div>
        );
    }
}