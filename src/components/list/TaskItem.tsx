import React, { useState } from 'react';
import EditTask from '../actions/EditTask';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = (props: any) => {
  const [task, setTask] = useState(props.task);

  return (
    <>
      <TableRow key={task.id}>
        <TableCell>{task.id}</TableCell>
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{task.deadline}</TableCell>
        <TableCell>{task.tag}</TableCell>
        <TableCell>
          <div style={{ display: 'flex' }}>
            <EditTask />
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}

export default TaskItem;
