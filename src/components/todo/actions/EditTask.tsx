import React, { FC, ChangeEventHandler, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ITaskType, ITaskInput } from 'features/todo/types';
import { editTask } from 'features/todo/reducer';
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

interface IEditedTaskType {
  task: ITaskType
}

const EditTask:FC<IEditedTaskType> = ({ task }) => {
  const dispatch: any = useDispatch();

  const [editedTask, setEditedTask] = useState<ITaskType>({
      id: task.id,
      name: task.name,
      description: task.description,
      deadline: task.deadline
  });

  const defaultValues: ITaskInput = {
    taskName: task.name,
    taskDescription: task.description,
    taskDeadline: task.deadline
  }

  const { control, reset, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<ITaskInput>({
    defaultValues
  });

  const onSubmit: SubmitHandler<ITaskInput> = (data) => {
    console.log(data);
  }

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

  const handleEditDeadline = (day: ITaskType['deadline']) => {
    setEditedTask(editedTask => ({
      ...editedTask,
      deadline: formatDate(day)
    }));
  };

  const handleSaveEditedTask = () => {
    dispatch(editTask(editedTask));
    handleCloseDialog();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [defaultValues, isSubmitSuccessful, reset])

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
          <Box 
            component="form" 
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="taskName"
              control={control}
              render={({ field }) => (
                <TextField 
                  {...field}
                  label="Task Name"
                  variant="outlined" 
                  size="small" 
                  margin="dense"
                  value={editedTask.name}
                  onChange={handleEditName}
                  fullWidth required
                  error={errors.taskName ? true : false}
                  helperText={errors.taskName?.message}
                />
              )}
            />
            <Controller
              name="taskDescription"
              control={control}
              render={({ field }) => (
                <TextField 
                  {...field}
                  label="Task Description" 
                  variant="outlined" 
                  size="small"
                  margin="dense"
                  value={editedTask.description}
                  onChange={handleEditDescription} 
                  fullWidth required
                  error={errors.taskDescription ? true : false}
                  helperText={errors.taskDescription?.message}
                />
              )}
            />
            <Controller
              name="taskDeadline"
              control={control}
              render={({ field }) => (
                <DesktopDatePicker
                  {...field}
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
              )}
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
