import axios from 'axios';

export async function login({ email, password }) { //eslint-disable-line
  const { status, data } = await axios.post('https://reqres.in/api/login', {
    email,
    password
  });

  if (status === 200) {
    return data;
  }

  throw Error('Error');
}
