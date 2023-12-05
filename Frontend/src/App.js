import './App.css';
import React from 'react';

import { SidebarRoutes } from './SidebarRoutes';
import { DivGeral } from './components/styles';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header/>
    <DivGeral>
      <SidebarRoutes />
    </DivGeral>
    </>
  );
}

export default App;
