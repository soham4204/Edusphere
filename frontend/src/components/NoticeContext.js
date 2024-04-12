import React, { createContext, useContext, useState } from 'react';

const NoticeContext = createContext();

const NoticeProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);

  const addNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  return (
    <NoticeContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};

const useNotice = () => {
  const context = useContext(NoticeContext);
  if (!context) {
    throw new Error('useNotice must be used within a NoticeProvider');
  }
  return context;
};

export { NoticeProvider, useNotice };

