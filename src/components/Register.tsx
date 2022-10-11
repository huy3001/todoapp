import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IRegisterInput } from 'features/user/types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const Register = () => {
  const defaultValues: IRegisterInput = useMemo(
    () => ({
      user: '',
      email: '',
      password: '',
    }),
    []
  );

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<IRegisterInput>({
    defaultValues,
  });

  const handleRegister: SubmitHandler<IRegisterInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [defaultValues, isSubmitSuccessful, reset]);

  return (
    <div className="Register">
      <Card
        variant="outlined"
        sx={{ width: '400px', mx: 'auto', my: 4, p: 2 }}
      >
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Controller
            name="user"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: 'User name too short',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="User Name"
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
            name="email"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: 'Email too short',
              },
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
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
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: 'Password too short',
              },
              maxLength: {
                value: 20,
                message: 'Password too long',
              },
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
                error={error ? true : false}
                helperText={error?.message}
              />
            )}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 1 }}
          >
            Sign Up
          </Button>
        </form>
        <p>Already have account!</p>
        <Link to="/login">Back to sign in</Link>
      </Card>
    </div>
  );
};

export default Register;
