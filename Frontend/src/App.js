import './App.css';
import React from 'react';

//import { SidebarRoutes } from './SidebarRoutes';
import { DivGeral } from './components/styles';
import { Header } from './components/Header';
import Login from './components/Login';



function App() {
  return (
    <>
      <Header/>
    <DivGeral>
      <Login/>
    </DivGeral>
    </>
  );
}

export default App;
