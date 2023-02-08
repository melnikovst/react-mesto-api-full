class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  async loadCards() {
    const res = await fetch(`${this._url}/cards`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._handleResponse(res);
  }

  async loadProfile() {
    const res = await fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._handleResponse(res);
  }

  getProfileId() {
    return (this.test = fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse));
  }

  _handleLike(string, obj) {
    this._like = fetch(`${this._url}/cards/${obj._id}/likes`, {
      method: string,
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
    return this._like;
  }

  changeLikeCardStatus(obj, variable) {
    this._status = variable
      ? this._handleLike('PUT', obj)
      : this._handleLike('DELETE', obj);
    return this._status;
  }

  deleteLike(obj) {
    this._deleteLike = fetch(`${this._url}/cards/${obj._id}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
    return this._deleteLike;
  }

  changeProfile(obj) {
    this._changedProfile = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
      credentials: 'include',
    }).then(this._handleResponse);
    return this._changedProfile;
  }

  addCard({ title, link }) {
    this._addedCard = fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: link,
      }),
      credentials: 'include',
    }).then(this._handleResponse);
    return this._addedCard;
  }

  deleteCard(obj) {
    this._deletedCard = fetch(`${this._url}/cards/${obj._id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
    return this._deletedCard;
  }

  setNewAvatar(obj) {
    this._newAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
      credentials: 'include',
    }).then(this._handleResponse);
    return this._newAvatar;
  }

  async signout() {
    const res = await fetch(`${this._url}/signout`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._handleResponse(res);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const server = new Api({
  url: 'http://api.melnikovst.pictures.nomoredomainsclub.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});
