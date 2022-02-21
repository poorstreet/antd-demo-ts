import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state: any) {
    return {state};
}

class Login extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);
