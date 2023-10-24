import './App.css';
import React from 'react';

import { SidebarRoutes } from './SidebarRoutes';
import { DivGeral } from './components/styles';

function App() {
  return (
    <DivGeral>
      <SidebarRoutes />
    </DivGeral>
  );
}

export default App;
