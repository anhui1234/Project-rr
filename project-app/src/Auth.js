import React from 'react';
import { Navigate } from 'react-router-dom';
import DeleteButton from './Component/Pages/Delete';
export const PrivateRoute = ({ element, isLoggedIn,...props }) => {
  return isLoggedIn ? (
    // React.cloneElement(element, props)
    <DeleteButton isLoggedIn={isLoggedIn} />
  ) : (
    React.cloneElement(element,props)
  );
};