import { combineReducers } from 'redux';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // auth: authReducer,
});

export default rootReducer;