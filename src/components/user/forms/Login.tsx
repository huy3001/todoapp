import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TLoginInput } from 'AppModels';
import { AppDispatch } from 'store/store';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { login } from 'features/user/reducers/auth';
import styles from 'components/user/forms/Login.module.scss';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const defaultValues: TLoginInput = useMemo(
    () => ({
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
  } = useForm<TLoginInput>({
    defaultValues,
  });

  const handleLogin: SubmitHandler<TLoginInput> = (data) => {
    console.log(data);
    dispatch(login(data))
      .unwrap()
      .then(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [defaultValues, isSubmitSuccessful, reset]);

  return (
    <div className="Login">
      <Card
        variant="outlined"
        sx={{
          width: '400px',
          mx: 'auto',
          my: 4,
          p: 2,
        }}
      >
        <h1 className={styles.loginHeading}>Sign In</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: 'Email too short',
              },
              // pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
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
              // pattern:
              //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
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
            Sign In
          </Button>
        </form>
        <p className={styles.loginText}>Don't have account yet!</p>
        <Link to="/register">Please sign up</Link>
      </Card>
    </div>
  );
};

export default Login;
