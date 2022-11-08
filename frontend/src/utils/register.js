export const register = async (email, password) => {
  const res = await fetch(
    'https://api.melnikovst.mesto.nomoredomains.icu/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }
  );
  const response = await res.json();
  if (res.ok) {
    return response;
  }
  return Promise.reject(response);
};

export const login = async (email, password) => {
  const res = await fetch(
    'https://api.melnikovst.mesto.nomoredomains.icu/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }
  );
  const response = await res.json();
  console.log(res.headers);
  if (res.ok) {
    if (response.token) {
      localStorage.setItem('jwt', response.token);
    }
    return;
  }
  return Promise.reject(response);
};

export const goMain = async () => {
  const res = await fetch(
    'https://api.melnikovst.mesto.nomoredomains.icu/users/me',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};
