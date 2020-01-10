import React from 'react';
import Header from './Header';
import { Route, Switch, BrowserRouter, Router } from 'react-router-dom';
import Child from './Child';
import CreateUser from './CreateUser';
import history from './history';
import Users from './Users';
import List from './List';
import DeleteUser from './DeleteUser';
import DeleteUsers from './DeleteUsers';


// Route path={process.env.PUBLIC_URL + '/'}

class App extends React.Component {

    render() {
        return(
            <Router history={history}>
                <Header />
                <div className="ui container">                  
                    <Switch>
                        <Route path="/tasks/:id" exact children={<Child />} />    
                        <Route path={process.env.PUBLIC_URL + '/createNewUser'} exact component={CreateUser} />   
                        <Route path={process.env.PUBLIC_URL + '/'} exact component={CreateUser} /> 
                        <Route path="/tasks" exact component={List} />     
                        <Route path="/deleteUser" exact component={DeleteUser} />  
                        <Route path="/ee" exact component={DeleteUsers} />           
                    </Switch>
                </div>               
            </Router> 
        );    
    }       
}

export default App;