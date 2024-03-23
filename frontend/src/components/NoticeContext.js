import React, { createContext, useContext, useState } from 'react';
const NoticeContext = createContext();

const NoticeProvider = ({ children }) => {
  const [notice, setNotice] = useState(null);

  return (
    <NoticeContext.Provider value={{ notice, setNotice }}>
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
