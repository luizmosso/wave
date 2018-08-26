import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as familiaActions from '../../actions/familia';
import * as notificationActions from '../../actions/notification';
import { Link } from "react-router-dom";
import Search from '../../components/Search';
import List from '../../components/List';
import NavBar from '../../components/NavBar';
import ListItemButton from '../../components/ListItemButton';
import FloatButton from '../../components/FloatButton';


class Familias extends Component {

    constructor() {
        super();
        this.state = { familias: [], searched: [] };
    }

    search(searched) {
        this.setState({ searched });
    }

    componentDidMount() {
        this.props.getFamilias((familias) => {
            let arrFamilias = [];
            for (let i = 0; i < familias.length; i++) {
                const familia = familias[i];

                arrFamilias.push(
                    {
                        left: familia.id,
                        up: familia.membros[0].nome,
                        down: `${familia.endereco} - ${familia.bairro}`,
                        right: (
                            <Link to={`/familias/add/${familia.id}`}>
                                <ListItemButton color="white" backgroundColor="rgb(72, 142, 189)" label="Info" />
                            </Link>
                        ),
                        active: familia.ativo
                    }
                );
            }
            this.setState({ familias: arrFamilias, searched: arrFamilias });
        });
    }

    render() {

        const counter = {
            textAlign: 'right',
            alignSelf: 'left',
            width: '100%',
            maxWidth: 490,
            marginRight: 20,
            marginTop: 20,
            fontWeight: 'bold'
        }
        let familiaCount = this.state.familias.length > 0 ? this.state.familias.filter(f => f.active === true).length : 0;
        return (
            <div className="familias container">
                <NavBar title="FAMÍLIAS" image={require('../../content/family_icon.svg')} backColor="#421666" />
                <Search searched={this.search.bind(this)} data={this.state.familias} />
                <div style={counter}>{`${familiaCount} ativas`}</div>
                <List items={this.state.searched} maxHeight={"75vh"} />
                <FloatButton icon={require('../../content/plus.svg')} backColor="white" route="/familias/add" />
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        familia: state.familia,
        notification: state.notification
    });

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...familiaActions,
        ...notificationActions
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Familias);