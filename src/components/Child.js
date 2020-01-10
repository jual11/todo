import React from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import Users from './Users';

const Child = () => {

    let { id } = useParams();
    return (
        <div >
            <List user={id}/>
        </div>
    );
  }

export default Child;

