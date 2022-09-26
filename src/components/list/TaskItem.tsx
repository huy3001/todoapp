import React from 'react';
import EditTask from '../actions/EditTask';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = (props: any) => {
  const handleTaskRemove = () => {
    props.onClickRemove(props.task.id);
  }

  return (
    <>
      <TableRow>
        <TableCell>{props.task.id}</TableCell>
        <TableCell>{props.task.name}</TableCell>
        <TableCell>{props.task.description}</TableCell>
        <TableCell>{props.task.deadline}</TableCell>
        <TableCell>{props.task.tag}</TableCell>
        <TableCell>
          <div style={{ display: 'flex' }}>
            <EditTask task={props.task} onEdit={props.onClickEdit} />
            <IconButton aria-label="delete" onClick={handleTaskRemove}>
              <DeleteIcon />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}

export default TaskItem;
