export interface IAuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  middleName: string;
  username: string;
  motherMaidenName:string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
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

export interface BasicInfoFormData {
  middlename: string;
  date_of_birth: string;
  phone_number: string;
  gender: string;
  mother_maiden_name: string;
}
