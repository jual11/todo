import React from 'react';
import { Link } from 'react-router-dom';
import { showUsers, deleteUser } from '../actions';
import { connect } from 'react-redux';


class Users extends React.Component{
    componentDidMount() {
        this.props.showUsers();   
    }

    sendData = (user) => {
        this.props.parentCallback(user);
   }

   deleteUser(id) {
       this.props.deleteUser(id);
   }
    
    renderList() { 
        return this.props.users.map(user => {   
            if(this.props.delUser === true) {
                return (
                    <div className='userName' key={user.id}>
                        <div className='userName-link'  to={`/tasks/${user.user}`}>{user.user}
                            <button className='ui button negative delUser' onClick={() => this.deleteUser(user.id)}>Delete</button>
                        </div>     
                    </div>
                )
            } else {
                return (
                    <div className='userName' key={user.id}>
                        <Link className='userName-link'  to={`/tasks/${user.user}`}>{user.user}</Link>     
                    </div>
                )
            }
        })
    };
    
    renderUser(){
        if(this.props.delUser === true) {
            return (
                <div>
                    <h3>Users</h3>
                    {this.renderList()}
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <Link to={`/createNewUser`}>New User</Link>
                        <Link to={`/deleteUser`}>Delete User</Link>
                    </div>
                    <h3>Users</h3>
                    {this.renderList()} 
                </div>
            )
        }
    }

    render() {
        return(
            <div className='userContainer'>
                {this.renderUser()}  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      users: Object.values(state.Users)
    };
  }

export default connect(mapStateToProps, {showUsers, deleteUser}) (Users);