import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { createUser} from '../actions';
import { Link } from 'react-router-dom';
import history from './history';


class CreateUser extends React.Component {

    onSubmit = (newUser, dispatch) => {
        this.props.createUser(newUser);    
        dispatch(reset("newUser"));
        history.push(`/tasks`);
    }

    renderInput =  ({input})  => {
        return <input {...input} className="newTask-input"></input>
    }

    render() {
        return(
            <form className='createUser-from' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h3>Insert Your Name</h3>
                <Field name='user' component={this.renderInput} type='text'  />
                <button className='ui positive button rr' onSubmit={this.props.handleSubmit(this.onSubmit)}>Submit</button> 
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      tasks: Object.values(state.TaskReducer)
    };
  }

CreateUser = connect(mapStateToProps, {createUser}) (CreateUser);

export default reduxForm({
    form: 'newUser'
})(CreateUser);