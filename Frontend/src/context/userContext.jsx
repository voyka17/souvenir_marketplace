import React from 'react';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error al cargar el usuario desde localStorage:', error);
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };   
    loadUserFromLocalStorage();
  }, []);

  const login = (userData) => {
    setUser(userData);

    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={value}>      
      {!loading && children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
