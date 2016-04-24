var api = {
  _callGithub(username, endpoint) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}${endpoint}`;
    return fetch(url).then((res) =>{
      return res.json();
    });
  },
  getBio(username){
    return this._callGithub(username, '');
  },
  getRepos(username){
    return this._callGithub(username, '/repos');
  },
  getNotes(username){
    username = username.toLowerCase().trim();
    var url = `https://reacttesteggheadmcamara.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => {
      return res.json();
    });
  },
  addNote(username, note){
    username = username.toLowerCase().trim();
    var url = `https://reacttesteggheadmcamara.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => {
      return res.json();
    });
  }
};

export default api;
