import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ITaskType, ITaskInput } from 'features/todo/types';
import { selectTodos } from 'features/todo/selectors';
import { addTask } from 'features/todo/reducer';
import formatDate from 'components/FormatDate';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const AddTask = () => {
  const dispatch: any = useDispatch();
  const todosLength: number = useSelector(selectTodos).length;

  const defaultValues: ITaskInput = {
    taskName: '',
    taskDescription: '',
    taskDeadline: formatDate(dayjs())
  }

  const { control, reset, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<ITaskInput>({
    defaultValues
  });

  const onSubmit: SubmitHandler<ITaskInput> = (data) => {
    console.log(data);
  }

  const initialState = {
    id: todosLength,
    name: '',
    description: '',
    deadline: formatDate(dayjs())
  }

  const [task, setTask] = useState<ITaskType>(initialState);

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleChangeName:ChangeEventHandler<HTMLInputElement> = (e) => {
    setTask(task => ({
      ...task,
      name: e.target.value
    }));
  };

  const handleChangeDescription:ChangeEventHandler<HTMLInputElement> = (e) => {
    setTask(task => ({
      ...task,
      description: e.target.value
    }));
  };

  const handleChangeDeadline = (day: ITaskType['deadline']) => {
    setTask(task => ({
      ...task,
      deadline: formatDate(day)
    }));
  };

  const handleResetTask = () => {
    setTask(initialState);
    handleCloseDialog();
  }

  const handleSaveTask = () => {
    const newTask: ITaskType = {
      id: todosLength + 1,
      name: task.name,
      description: task.description,
      deadline: task.deadline
    }
    dispatch(addTask(newTask));
    handleResetTask();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [defaultValues, isSubmitSuccessful, reset])

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
                  value={task.name}
                  onChange={handleChangeName}
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
                  value={task.description}
                  onChange={handleChangeDescription} 
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
                  value={task.deadline}
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
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button 
            variant="contained" 
            onClick={handleResetTask}
          >
            Cancel
          </Button>
          <Button 
            variant="contained"
            type="submit" 
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
