export interface IAuthUser {
  id: string;
  firstname: string;
  lastname: string;
}

export interface ISetCurrentUser {
  user: IAuthUser;
}

export interface AuthState {
  isAuthenticated: boolean,
  user: IAuthUser,
}

export interface ILoginState {
  username: string,
  password: string;
}

export interface ISignupState extends ILoginState {
  firstname: string;
  lastname: string;
  email: string;
}
