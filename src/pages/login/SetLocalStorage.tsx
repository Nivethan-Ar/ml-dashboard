const SetLocalStorage = () => {
  //   const PERMITTED_DOMAIN = 'http://example.com';
  /**
   * Receiving message from other domain
   */
  window.addEventListener('message', (event) => {
    // if (event.origin === PERMITTED_DOMAIN) {
    // var msg = JSON.parse(event.data);
    // var msgKey = Object.keys(msg)[0];
    if (event.data.message === 'login') {
      localStorage.setItem('jwtToken', event.data.data.accessToken);
      const obj = { username: event.data.data.username };
      localStorage.setItem('user', JSON.stringify(obj));
    } else if (event.data.message === 'logout') {
      localStorage.removeItem('user');
      localStorage.removeItem('jwtToken');
    }
  });

  return (
    <>
    </>
  );
};

export default SetLocalStorage;
