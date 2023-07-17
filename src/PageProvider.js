import React, { createContext, useState } from 'react';

// Create a context for the page state
export const PageContext = createContext();

// Create a provider component
export const PageProvider = ({ children }) => {
  const [page, setPage] = useState('home');
  console.log("PROVIDER REFRESHED!")
  // Function to update the page state
  const changePage = (newPage) => {
    if (page === newPage) return
    setPage(newPage);
  };

  // Value object to be provided to the consumers
  const value = {
    page,
    changePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
