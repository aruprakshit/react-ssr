import axios from 'axios';
import { get } from 'https';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
  console.log(res);
  

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
