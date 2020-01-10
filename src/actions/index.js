import tasks from '../apis/tasks';



export const createTask = (taskValue, user) => async dispatch => {
   const doneValue = true;
   const responce = await tasks.post('/tasks', {...taskValue, doneValue, user});

   dispatch({ type: "CREATE_TASK", payload: responce.data })
};

export const showTasks = () => async dispatch => {
   const responce = await tasks.get(`/tasks`);

   dispatch({ type: "SHOW_TASKS", payload: responce.data })
};

export const doneTask = (task) => async dispatch => {
   const responce = await tasks.put(`/tasks/${task.id}`, {...task, doneValue: !task.doneValue});

   dispatch({ type: "DONE_TASK", payload: responce.data })
};

export const deleteTask = id => async dispatch => {
   await tasks.delete(`/tasks/${id}`);
   
   dispatch({ type: "DELETE_TASK", payload: id })
}

export const createUser = (user) => async dispatch => {
   const responce = await tasks.post('/users', {...user});

   dispatch({ type: "CREATE_USER", payload: responce.data })
};

export const showUsers = () => async dispatch => {
   const responce = await tasks.get(`/users`);

   dispatch({ type: "SHOW_USERS", payload: responce.data })
};

export const deleteUser = id => async dispatch => {
   await tasks.delete(`/users/${id}`);
   
   dispatch({ type: "DELETE_USER", payload: id })
}

// export const changeTime = (task) => async dispatch => {
//    const responce = await tasks.put(`/tasks/${task.id}`, {...task, timeValue: 'Today'});

//    dispatch({ type: "CHANGE_TIME", payload: responce.data })
// };

// export const doneTask = (task) => {
//    return {
//       type: 'DONE_TASK',
//       payload: task
//    }
// }

// export const signIn = (userId) => {
//    return {
//        type: 'SIGN_IN',
//        payload: userId
//    };
// };

// export const fetchStreams = () => async dispatch => {
//    const responce = await streams.get('/streams');
   
//    dispatch({ type: "FETCH_STREAMS", payload: responce.data })
// }

   // export const showTask = id => async dispatch => {
   //    const responce = await tasks.post(`/tasks/${id}`);
   
   //    dispatch({ type: "SHOW_TASK", payload: responce.data })
   // };

// export const idTask = (hhh) => {
//     return {
//         type: 'n',
//         payload: hhh
        
        
//     }
// }