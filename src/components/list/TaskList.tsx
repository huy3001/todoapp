import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const TaskList = (props: any) => {
  const [list, setList] = useState(props.list);

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
              <TableCell>Tag</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item: any) => (
              <TaskItem task={item} key={item.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TaskList;
