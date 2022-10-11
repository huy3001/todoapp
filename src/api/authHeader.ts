const authHeader = () => {
  const userData: any = localStorage.getItem('user');
  const user = JSON.parse(userData);

  if (user && user.accessToken) {
    return {
      Authorization: 'Bearer ' + user.accessToken
    }
  }
  else {
    return {};
  }
}

export default authHeader;
