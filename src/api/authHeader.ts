const authHeader = () => {
  const userData = localStorage.getItem('user') || '';
  const user = JSON.parse(userData);

  if (user && user.accessToken) {
    return {
      Authorization: 'Bearer ' + user.accessToken,
    };
  } else {
    return {};
  }
};

export default authHeader;
