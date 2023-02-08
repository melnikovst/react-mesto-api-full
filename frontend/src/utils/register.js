export const register = async (email, password) => {
  const res = await fetch('http://api.melnikovst.pictures.nomoredomainsclub.ru/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  const response = await res.json();
  if (res.ok) {
    return response;
  }
  console.log(response);
  return Promise.reject(response);
};

export const login = async (email, password) => {
  const res = await fetch('http://api.melnikovst.pictures.nomoredomainsclub.ru/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  const response = await res.json();
  console.log(response);
  if (res.ok) {
    if (response.token) {
      localStorage.setItem('jwt', response.token);
    }
    return;
  }
  return Promise.reject(response);
};

export const goMain = async () => {
  const res = await fetch('http://api.melnikovst.pictures.nomoredomainsclub.ru/users/me', {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (res.ok) {
    return await res.json();
  }
  console.log(res)
  return Promise.reject(await res.json());
};
