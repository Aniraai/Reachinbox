import React from 'react';
import { Navigate } from 'react-router-dom';

const Gapi = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('user') !== null;

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default Gapi;
