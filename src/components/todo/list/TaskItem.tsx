import React, { FC, memo } from 'react';
// import { useDispatch } from 'react-redux';
import { TTaskItem } from 'AppModels';
// import { removeTask } from 'features/todo/reducer';
import EditTask from 'components/todo/actions/EditTask';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import formatDate from 'helper/formatDate';
import { useRemoveTodoMutation } from 'features/todo/query';

type TTaskDetail = {
  task: TTaskItem;
};

const TaskItem: FC<TTaskDetail> = ({ task }) => {
  // const dispatch: any = useDispatch();

  const [removeTodo] = useRemoveTodoMutation();

  const handleTaskRemove = () => {
    removeTodo({ id: task.id });
    // dispatch(removeTask({ id: task.id }));
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
