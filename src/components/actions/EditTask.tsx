import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const EditTask = (props: any) => {
  const [editedTask, setEditedTask] = useState({
      editedName: '',
      editedDescription: '',
      editedDeadline: '',
      editedTag: ''
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

  const handleEditTag = (e: any) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      editedTag: e.target.value
    }));
  };

  const handleSaveEditedTask = () => {
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
              onChange={handleEditName}
              fullWidth required
            />
            <TextField 
              id="task-description" 
              label="Task Description" 
              variant="outlined" 
              size="small"
              margin="dense"
              onChange={handleEditDescription} 
              fullWidth required
            />
            <TextField 
              id="task-tag" 
              label="Task Tag" 
              variant="outlined" 
              size="small"
              margin="dense"
              onChange={handleEditTag} 
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
