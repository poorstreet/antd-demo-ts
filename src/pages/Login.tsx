import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "antd";
import {Outlet} from "react-router-dom";

function mapStateToProps(state: any) {
    return {state};
}

class Login extends Component {
    render() {
        return (
            <div>
                <Button>登录1</Button>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);
