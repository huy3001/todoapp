import React from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

class AddTask extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription: '',
            taskDeadline: '',
            taskTag: ''
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <Button variant='outlined' startIcon={<AddOutlinedIcon/>}>
                    Add Task
                </Button>
            </div>
        )
    }
}

export default AddTask;