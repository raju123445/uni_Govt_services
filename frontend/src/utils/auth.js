export const getUserSession = () => {
  try {
    const session = localStorage.getItem('userSession');
    if (!session) return null;
    
    const parsedSession = JSON.parse(session);
    // Validate the session structure
    if (!parsedSession.isLoggedIn || !parsedSession.user) {
      localStorage.removeItem('userSession');
      return null;
    }
    
    return parsedSession;
  } catch (error) {
    console.error('Error parsing user session:', error);
    localStorage.removeItem('userSession');
    return null;
  }
};

export const isAuthenticated = () => {
  const session = getUserSession();
  return Boolean(session?.isLoggedIn && session?.user);
};

export const logout = () => {
  localStorage.removeItem('userSession');
  window.location.href = '/';
};

export const setUserSession = (userData) => {
  if (!userData) {
    throw new Error('User data is required');
  }
  
  const sessionData = {
    isLoggedIn: true,
    user: userData
  };
  
  localStorage.setItem('userSession', JSON.stringify(sessionData));
}; 