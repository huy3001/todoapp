import React, { FC, memo } from 'react';
import TaskItem from 'components/todo/list/TaskItem';
import { TTaskItem } from 'AppModels';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

interface IListType {
  list: TTaskItem[];
}

const TaskList: FC<IListType> = ({ list }) => {
  return (
    <div
      className="TaskList"
      style={{ marginBottom: 20 }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: '50%', mx: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item: TTaskItem) => (
              <TaskItem
                task={item}
                key={item.id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(TaskList);
