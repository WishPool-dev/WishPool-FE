const clearSession = () => {
  window.sessionStorage.removeItem('pickedGifts');
  window.sessionStorage.removeItem('initialGifts');
  window.sessionStorage.removeItem('wishpoolId');
  window.sessionStorage.removeItem('swipe-guide');
};

export default clearSession;
