import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  return login ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
