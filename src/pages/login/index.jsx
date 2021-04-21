import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin,reqAddUser} from '../../api';

import './index.less'
import logo from './images/logoE.png'

/**
 * Login router component
 */
class Login extends Component {

    onFinish = async (values) => {
        const {username, password} = values;
        const result = await reqLogin(username, password);

        if(result.status === 0) {
            message.success("success");

            this.props.history.replace("/admin");
        }else {
            message.error("failed");
            this.props.history.redirect("/login");
        }

    };


    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1> Admin Management Login</h1>
                </header>

                <section className="login-content">
                    <h2> Admin Login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {required: true, message: 'Please input your Username!'},
                                {min: 4, message: 'username must be at least 4 characters'},
                                {max: 12, message: 'username must be at most 12 characters '},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: 'username can be characters, numbers, or _'}
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {required: true, message: 'Please input your Password!'},
                                {min: 4, message: 'username must be at least 4 characters'},
                                {max: 12, message: 'username must be at most 12 characters '},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: 'username can be characters, numbers, or _'}
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>

                </section>
            </div>
        );
    }
}

export default Login;