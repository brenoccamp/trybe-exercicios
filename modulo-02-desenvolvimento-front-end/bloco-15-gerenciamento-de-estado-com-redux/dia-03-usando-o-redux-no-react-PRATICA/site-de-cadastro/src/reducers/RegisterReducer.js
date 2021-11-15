import { ADD_REGISTER, DELETE_REGISTER } from '../actions/index';

const INITIAL_STATE = {
  registeredClients: [],
};

const RegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_REGISTER:
    return {
      ...state,
      registeredClients: [...state.registeredClients, action.clientData],
    }
  case DELETE_REGISTER:
    return {
      ...state,
      registeredClients: state.registeredClients.filter((register) => register !== action.registerToDelete),
    }
  default:
      return state;
  }
}

export default RegisterReducer;
