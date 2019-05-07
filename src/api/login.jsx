import axios from 'axios';

export async function login({ email, password }) { //eslint-disable-line
  try {
    const { status, data } = await axios.post('https://reqres.in/api/login', {
      email,
      password
    });

    if (status === 200) {
      return data;
    }

    return new Error('An error occurred');
  } catch (ex) {
    throw new Error(ex);
  }
}
