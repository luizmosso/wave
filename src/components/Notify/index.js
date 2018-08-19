import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as notificationActions from '../../actions/notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notify extends Component {
    notify = (notification) => {
        if (notification.isError) {
            toast.error(notification.message.toString(), {
                position: toast.POSITION.TOP_CENTER
            });
            this.props.notify(false);
        }
        else {
            if (notification.isSuccess) {
                toast.success(notification.message.toString(), {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            this.props.notify(false);
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.notification.notify !== newProps.notification.notify) {
            if (newProps.notification.notify === true)
                this.notify(newProps.notification);
        }
    }

    render() {
        return <ToastContainer autoClose={3000} />
    }
}

const mapStateToProps = state => ({ notification: state.notification });
const mapDispatchToProps = dispatch => bindActionCreators(notificationActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notify));
