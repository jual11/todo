import React from 'react';
import Users from './Users';



const DeleteUser = () => {
    return (
        <div>
            <Users delUser={true} />
        </div>
    )
}

export default DeleteUser;