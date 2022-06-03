export interface IUserState {
  loginForm: {
    email: string;
    password: string;
  },
  registerForm: {
    email: string;
    password: string;
    name: string;
  },
  response: {
    message: string | null;
    status: boolean;
  },
  user: {
    _id: string;
    name: string;
    email: string;
    token: string;
  },
  isLoading: boolean;
  loggedIn: boolean;
}
