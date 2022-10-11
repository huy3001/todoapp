import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ITaskType, ITaskInput } from 'features/todo/types';
import { selectTodos } from 'features/todo/selectors';
import { addTask } from 'features/todo/reducer';
import { AppDispatch } from 'store/store';
import formatDate from 'components/FormatDate';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const AddTask = () => {
  const dispatch: AppDispatch = useDispatch();
  const todosLength = useSelector(selectTodos).length;

  const defaultValues: ITaskInput = useMemo(
    () => ({
      taskName: '',
      taskDescription: '',
      taskDeadline: formatDate(dayjs()),
    }),
    []
  );

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<ITaskInput>({
    defaultValues,
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleResetTask = () => {
    handleCloseDialog();
  };

  const handleSubmitTask: SubmitHandler<ITaskInput> = (data) => {
    console.log(data);
    const newTask: ITaskType = {
      id: todosLength + 1,
      name: data.taskName,
      description: data.taskDescription,
      deadline: data.taskDeadline,
    };
    dispatch(addTask(newTask));
    handleResetTask();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [defaultValues, isSubmitSuccessful, reset]);

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
      >
        Add Task
      </Button>

      {open && (
        <Dialog
          open={open}
          onClose={handleCloseDialog}
        >
          <form onSubmit={handleSubmit(handleSubmitTask)}>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
              <Controller
                name="taskName"
                control={control}
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Task name too short',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Task name too long',
                  },
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
                    message: 'Task description too short',
                  },
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
                  required: true,
                }}
                render={({ field, fieldState: { error } }) => (
                  <DesktopDatePicker
                    {...field}
                    label="Deadline"
                    inputFormat="MM/DD/YYYY"
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        margin="dense"
                        fullWidth
                        error={error ? true : false}
                        helperText={error?.message}
                        {...params}
                      />
                    )}
                  />
                )}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                type="reset"
                onClick={handleResetTask}
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
      )}
    </div>
  );
};

export default AddTask;
