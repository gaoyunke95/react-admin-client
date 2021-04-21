import React, {Component} from 'react';
import memoryUtil from '../../utils/memoryUtil';
import {Redirect} from 'react-router-dom';

/**
 * Admin Management router component
 */
class Admin extends Component {
    render() {

        const user = memoryUtil.user
        if(!user ||  !user._id){
            return <Redirect to='/login'/>;
        }
        return (
            <div>
                Hello {user.username}
            </div>
        );
    }
}

export default Admin;