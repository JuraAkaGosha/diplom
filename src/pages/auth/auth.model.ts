export interface BaseAuth{
  email: string;
  password: string;
}

export interface SignUpModel extends BaseAuth{
  name: string;
  surname: string;
  phone: string;
}
