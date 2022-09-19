import React from 'react';
import AddTask from './actions/AddTask';

class ToDoList extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <AddTask/>
            </div>
        )
    }
}

export default ToDoList;