import React, { FC, ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITaskType } from 'features/todo/types';
import { editTask } from 'features/todo/actions';
import formatDate from 'components/FormatDate';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const EditTask:FC<ITaskType> = ({ task }) => {
  const dispatch: any = useDispatch();

  const [editedTask, setEditedTask] = useState<ITaskType['task']>({
      id: task.id,
      name: task.name,
      description: task.description,
      deadline: task.deadline
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleEditName:ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      name: e.target.value
    }));
  };

  const handleEditDescription:ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      description: e.target.value
    }));
  };

  const handleEditDeadline = (day: ITaskType['task']['deadline']) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      deadline: formatDate(day)
    }));
  };

  const handleSaveEditedTask = () => {
    dispatch(editTask(editedTask.id, editedTask.name, editedTask.description, editedTask.deadline));
    handleCloseDialog();
  }

  return (
    <div>
      <IconButton 
        aria-label="edit"
        onClick={handleOpenDialog}
      >
        <EditIcon />
      </IconButton>

      <Dialog 
        open={open} 
        onClose={handleCloseDialog}
      >
        <DialogTitle>Edit Selected Task</DialogTitle>
        <DialogContent>
          <Box component="form" autoComplete="off">
            <TextField 
              id="task-name" 
              label="Task Name"
              variant="outlined" 
              size="small" 
              margin="dense"
              value={editedTask.name}
              onChange={handleEditName}
              fullWidth required
            />
            <TextField 
              id="task-description" 
              label="Task Description" 
              variant="outlined" 
              size="small"
              margin="dense"
              value={editedTask.description}
              onChange={handleEditDescription} 
              fullWidth required
            />
            <DesktopDatePicker
              label="Deadline"
              inputFormat="MM/DD/YYYY"
              value={editedTask.deadline}
              onChange={handleEditDeadline}
              renderInput={(params) => 
                <TextField 
                  size="small" 
                  margin="dense"
                  fullWidth required 
                  {...params} 
                />
              }
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
            onClick={handleSaveEditedTask}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTask;
