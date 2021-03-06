import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "antd";
import {sendLoginAction, sendLogoutAction} from "../store/actions/LoginAction";
import {IUser} from "../store/states/LoginState";
import {Navigate} from "react-router-dom";


class Login extends Component<any, any> {

    onLogin = () => {
        this.props.doLogin({id: "1", name: "张三"});
    }

    onLogout = () => {
        this.props.doLogout();
    }

    render() {
        return (
            <div>
                {this.props.loginInfo.login && <Navigate to="/home"></Navigate>}
                <Button onClick={this.onLogin}>登录</Button>
            </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any) {
    return state;
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        doLogin: (user: IUser) => {
            sendLoginAction(dispatch, user);
        },
        doLogout: () => {
            sendLogoutAction(dispatch);
        }
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
