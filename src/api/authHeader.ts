const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user') as string);

  if (user && user.accessToken) {
    return {
      Authorization: 'Bearer ' + user.accessToken,
    };
  } else {
    return {};
  }
};

export default authHeader;
