declare module 'AppModels' {
  export type TLoginInput = {
    email: string;
    password: string;
  }

  export type TRegisterInput = {
    name: string;
    email: string;
    password: string;
  }
}
