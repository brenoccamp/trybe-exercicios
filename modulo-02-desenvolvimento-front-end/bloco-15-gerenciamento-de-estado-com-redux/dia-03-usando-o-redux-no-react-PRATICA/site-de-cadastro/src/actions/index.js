export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const ADD_REGISTER = 'ADD_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export const loginAction = (email, password) => ({
  type: LOGIN_SUBMIT,
  email,
  password,
});

export const addRegister = (clientData) => ({
  type: ADD_REGISTER,
  clientData,
});

export const deleteRegister = (registerToDelete) => ({
  type: DELETE_REGISTER,
  registerToDelete,
});
