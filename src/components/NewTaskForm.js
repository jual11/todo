import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';


class NewTaskForm extends React.Component {
    onSubmit = (taskValue, dispatch) => {
        this.props.onTaskSubmit(taskValue);    
     dispatch(reset("newTasks"));
   // console.log(this.state.value);
    }

    renderInput =  ({input, meta})  => {
     //  console.log(this.props.timeValue);
     //   console.log(meta);
     //   console.log(input);
        return <input {...input} className="newTask-input"></input>
    }

    // renderInput = (formProps) => {
    //    //     console.log(formProps);
    //          return <input
                
    //              onChange={formProps.input.onChange}
    //         className="newTask-input" placeholder="New Task"></input>
    //      }


    render() {
        const time = this.props.timeValue;
        return(
            <form className='newTask-form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='task' component={this.renderInput} type='text' alt={time}   /> 
            </form>
        )
    }
}

export default reduxForm({
    form: 'newTasks'
})(NewTaskForm);


