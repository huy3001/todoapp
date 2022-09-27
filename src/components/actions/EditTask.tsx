import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../features/actions';
import formatDate from '../FormatDate';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const EditTask = (props: any) => {
  const dispatch: any = useDispatch();

  const [editedTask, setEditedTask] = useState({
      editedId: props.task.id,
      editedName: props.task.name,
      editedDescription: props.task.description,
      editedDeadline: props.task.deadline
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleEditName = (e: any) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      editedName: e.target.value
    }));
  };

  const handleEditDescription = (e: any) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      editedDescription: e.target.value
    }));
  };

  const handleEditDeadline = (day: any) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      editedDeadline: formatDate(day)
    }));
  };

  const handleSaveEditedTask = () => {
    dispatch(editTask(editedTask.editedId, editedTask.editedName, editedTask.editedDescription, editedTask.editedDeadline));
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
              value={editedTask.editedName}
              onChange={handleEditName}
              fullWidth required
            />
            <TextField 
              id="task-description" 
              label="Task Description" 
              variant="outlined" 
              size="small"
              margin="dense"
              value={editedTask.editedDescription}
              onChange={handleEditDescription} 
              fullWidth required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Deadline"
                inputFormat="DD/MM/YYYY"
                value={editedTask.editedDeadline}
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
            </LocalizationProvider>
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
