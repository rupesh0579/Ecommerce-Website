// import React from 'react'
// import { } from "antd";
import './App.css';
import AppFooter from './Components/Footer';
import AppHeader from './Components/Header';
import PageContent from './Components/PageContent';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <PageContent />
      <AppFooter />
    </div>
  )
};

export default App;