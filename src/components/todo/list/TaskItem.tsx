import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ITaskType } from 'features/todo/types';
import { removeTask } from 'features/todo/actions';
import EditTask from 'components/todo/actions/EditTask';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem:FC<ITaskType> = ({ task }) => {
  const dispatch: any = useDispatch();

  const handleTaskRemove = () => {
    dispatch(removeTask(task.id));
  }

  return (
    <>
      <TableRow>
        <TableCell>{task.id}</TableCell>
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{task.deadline}</TableCell>
        <TableCell>
          <div style={{ display: 'flex' }}>
            <EditTask task={task} />
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
