import React, { FC, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ITaskType, ITaskInput } from 'features/todo/types';
import { editTask } from 'features/todo/reducer';
import { AppDispatch } from 'store/store';
import formatDate from 'components/FormatDate';
import Button from '@mui/material/Button';
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
  const dispatch: AppDispatch = useDispatch();

  const defaultValues: ITaskInput = useMemo(() => (
    {
      taskName: task.name,
      taskDescription: task.description,
      taskDeadline: task.deadline
    }
  ), [task]);

  const { control, reset, handleSubmit, formState: { isSubmitSuccessful } } = useForm<ITaskInput>({
    defaultValues
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleSubmitEditedTask: SubmitHandler<ITaskInput> = (data) => {
    console.log(data);
    const editedTask:ITaskType = {
      id: task.id,
      name: data.taskName,
      description: data.taskDescription,
      deadline: formatDate(data.taskDeadline)
    }
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
        <form onSubmit={handleSubmit(handleSubmitEditedTask)}>
          <DialogTitle>Edit Selected Task</DialogTitle>
          <DialogContent>
            <Controller
              name="taskName"
              control={control}
              rules={{
                required: true,
                minLength: {
                  value: 6,
                  message: 'Task name too short'
                },
                maxLength: {
                  value: 50,
                  message: 'Task name too long'
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field}
                  label="Task Name"
                  variant="outlined" 
                  size="small" 
                  margin="dense"
                  fullWidth
                  error={error ? true : false}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="taskDescription"
              control={control}
              rules={{
                required: true,
                minLength: {
                  value: 10,
                  message: 'Task description too short'
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field}
                  label="Task Description" 
                  variant="outlined" 
                  size="small"
                  margin="dense"
                  fullWidth
                  error={error ? true : false}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="taskDeadline"
              control={control}
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <DesktopDatePicker
                  {...field}
                  label="Deadline"
                  inputFormat="MM/DD/YYYY"
                  renderInput={(params) => 
                    <TextField 
                      size="small" 
                      margin="dense"
                      fullWidth
                      error={error ? true : false}
                      helperText={error?.message}  
                      {...params} 
                    />
                  }
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button 
              variant="contained"
              type="reset" 
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
            <Button 
              variant="contained"
              type="submit" 
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default EditTask;
