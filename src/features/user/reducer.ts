import { userKeys, actionTypes } from './constant';
import { userApi } from '../../api/userApi';

const defaultState = {
  current: JSON.parse(localStorage.getItem(userKeys.user)) || {},
  settings: {}
}

const user = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return state;
    }

    case actionTypes.REGISTER: {
      return state;
    }

    case actionTypes.LOGOUT: {
      state.current = {}
      localStorage.removeItem(userKeys.access);
      localStorage.removeItem(userKeys.refresh);
      localStorage.removeItem(userKeys.user);
      return state;
    }
  
    default: {
      return state;
    }
  }
}

export default user;