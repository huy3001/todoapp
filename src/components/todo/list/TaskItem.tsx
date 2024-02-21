import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ITaskType } from 'features/todo/types';
import { removeTask } from 'features/todo/reducer';
import EditTask from 'components/todo/actions/EditTask';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import formatDate from 'helper/FormatDate';

interface ITaskItemType {
  task: ITaskType;
}

const TaskItem: FC<ITaskItemType> = ({ task }) => {
  const dispatch: any = useDispatch();

  const handleTaskRemove = () => {
    dispatch(removeTask({ id: task.id }));
  };

  return (
    <>
      <TableRow>
        <TableCell>{task.id}</TableCell>
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.description}</TableCell>
        <TableCell>{formatDate(task.deadline)}</TableCell>
        <TableCell>
          <div style={{ display: 'flex' }}>
            <EditTask task={task} />
            <IconButton
              aria-label="delete"
              onClick={handleTaskRemove}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default memo(TaskItem);
