import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "antd";
import {sendLoginAction, sendLogoutAction} from "../store/actions/LoginAction";
import {IUser} from "../store/states/LoginState";


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
                <div> {this.props.loginInfo.login ? "欢迎：" + this.props.loginInfo.user.name : "请登录"}</div>
                <Button onClick={this.onLogin}>登录</Button>
                <Button onClick={this.onLogout}>登出</Button>
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
