import React from 'react';
//import Task from './Task';
//import NewTask from './NewTask';
import { connect } from 'react-redux';
import { createTask, doneTask, deleteTask} from '../actions';
import { showTasks } from '../actions';
import { createUser, showUsers } from '../actions';
import NewTaskForm from './NewTaskForm';
import Users from './Users';
import CreateUser from './CreateUser';




class List extends React.Component {
    componentDidMount() {
        this.props.showTasks();     
    }
    
    onSubmit = (taskValue) => {
        const user = this.props.user;
        this.props.createTask(taskValue, user);
    };

    onClickDoneTask(task) {
        this.props.doneTask(task);
    //    console.log(task);
    }

    onClickDeleteTask(id) {
        this.props.deleteTask(id);
    }

    createUserSubmit = (newUser) => {
        this.props.createUser(newUser);
    }

    // ss(task) {
    //    let timeCount = setInterval(this.hh(task), 3000);
       
    // }

    // hh = (task) => {
    //     if(task.timeValue === 'Tomorrow') {
    //         alert("Hello!");
    //     }
    // }

    renderTask(task) {
    //    if(this.props.timeValue === 'Today') {
    //         if(task.doneValue === true) {
    //             return <div className='taskList_item_undone' onClick={() => this.onClickDoneTask(task)}>{task.Today}</div>
    //          } else {
    //             return (
    //                 <div className="taskList_item_done">
    //                     <div onClick={() => this.onClickDoneTask(task)} className="taskList_item_done-content">{task.Today}</div>
    //                     <button className="deleteTask-btn" onClick={() => this.onClickDeleteTask(task.id)}><i className="far fa-times-circle "></i></button>
    //                 </div>
    //             );
    //          };
    //     } else {
    //         if(task.doneValue === true) {
    //             return <div className='taskList_item_undone' onClick={() => this.onClickDoneTask(task)}>{task.Tomorrow}</div>
    //          } else {
    //             return (
    //                 <div className="taskList_item_done">
    //                     <div onClick={() => this.onClickDoneTask(task)} className="taskList_item_done-content">{task.Tomorrow}</div>
    //                     <button className="deleteTask-btn" onClick={() => this.onClickDeleteTask(task.id)}><i className="far fa-times-circle "></i></button>
    //                 </div>
    //             );
    //          };
    //     }
    //    this.ss(task);

        if(task.doneValue === true) {
            return <div className='taskList_item_undone' onClick={() => this.onClickDoneTask(task)}>{task.task}</div>
         } else {
            return (
                <div className="taskList_item_done">
                    <div onClick={() => this.onClickDoneTask(task)} className="taskList_item_done-content">{task.task}</div>
                    <button className="deleteTask-btn" onClick={() => this.onClickDeleteTask(task.id)}><i className="far fa-times-circle "></i></button>
                </div>
            );
         }; 
    }

    // sss = () => {
    //  //   var numbers = [65, {tee:'mina', id:3}, 2020, {tee:'mina', id:7}, 4];
    //     return this.props.tasks.map(ss => {
    //         if ( ss.timeValue === 'Tomorrow' ) {
    //             this.props.changeTime(ss);
    //             console.log(ss)
    //         }
    //         return;
            
    //     })
        
        
        
    // }

    
    
    renderList() { 
        return this.props.tasks.map(task => {   
            if(task.user === this.props.user) {
                return (
                    <div className="taskList_item" key={task.id} >
                        <div>      
                            {this.renderTask(task)}  
                                              
                        </div>                  
                    </div>
                )
            }    
        })
    };

    rr() {
        if(this.props.user === undefined) {
            return <h3>Vali oma kasutaja!</h3>
        } else {
            return (
                <div className="taskList-container">
                    <div className="taskList">
                        <h3 className="taskList-heading">Today</h3>
                        {this.renderList()}  
                    </div>
                    <NewTaskForm timeValue={this.props.timeValue} onTaskSubmit={this.onSubmit}/>
                </div>
            ) 
        }
    }

    render() {
        return(
            <div className='pageContainer'>
                <div>{this.rr()}</div>
                <Users />   
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
      tasks: Object.values(state.TaskReducer)
    };
  }

export default connect(mapStateToProps, {createTask, showTasks, doneTask, deleteTask, createUser}) (List);