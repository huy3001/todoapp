import { userKeys, actionTypes } from 'features/user/constant';

const user = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return state;
    }

    case actionTypes.REGISTER: {
      return state;
    }

    case actionTypes.LOGOUT: {
      return state;
    }
  
    default: {
      return state;
    }
  }
}

export default user;
