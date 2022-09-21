import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const date: Date = new Date();

const AddTask = (props: any) => {
  const [task, setTask] = useState({
      name: '',
      description: '',
      deadline: dayjs(date),
      tag: ''
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleChangeName = (e: any) => {
    setTask(task => ({
      ...task,
      name: e.target.value
    }));
  };

  const handleChangeDescription = (e: any) => {
    setTask(task => ({
      ...task,
      description: e.target.value
    }));
  };

  const handleChangeDeadline = (day: any) => {
    setTask(task => ({
      ...task,
      deadline: day
    }));
  };

  const handleChangeTag = (e: any) => {
    setTask(task => ({
      ...task,
      tag: e.target.value
    }));
  };

  const handleSaveTask = () => {
    setTask(task => ({
      ...task,
      name: '',
      description: '',
      deadline: dayjs(date),
      tag: ''
    }));
    handleCloseDialog();
  }

  return (
    <div>
      <Button 
        variant="outlined" 
        startIcon={<AddIcon />} 
        onClick={handleOpenDialog}
      >
        Add Task
      </Button>

      <Dialog 
        open={open} 
        onClose={handleCloseDialog}
      >
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <Box component="form" autoComplete="off">
            <TextField 
              id="task-name" 
              label="Task Name"
              variant="outlined" 
              size="small" 
              margin="dense"
              onChange={handleChangeName}
              fullWidth required
            />
            <TextField 
              id="task-description" 
              label="Task Description" 
              variant="outlined" 
              size="small"
              margin="dense"
              onChange={handleChangeDescription} 
              fullWidth required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Deadline"
                inputFormat="MM/DD/YYYY"
                value={dayjs(date)}
                onChange={handleChangeDeadline}
                renderInput={(params) => 
                  <TextField 
                    size="small" 
                    margin="dense" 
                    fullWidth required 
                    {...params} 
                  />
                }
              />
            </LocalizationProvider>
            <TextField 
              id="task-tag" 
              label="Task Tag" 
              variant="outlined" 
              size="small"
              margin="dense"
              onChange={handleChangeTag} 
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button 
            variant="contained" 
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleSaveTask}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
