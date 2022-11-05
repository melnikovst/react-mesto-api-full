import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component, ...props }) => {
  return props.isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to="./sign-in" />
  );
};

export default ProtectedRoute;

const name = 'Alesha';
let age = 50;
age = String(age);

console.log(typeof age);
