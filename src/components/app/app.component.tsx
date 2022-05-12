import React from 'react';
import { Auth } from '../auth/auth.component';
import { Home } from '../home/home.component';

const App: React.FC = () => {
  return(
    <>
    <Auth/>
    <Home/>
    </>
  )
};

export {App};
