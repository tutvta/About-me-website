import React from 'react';
import Experience from './components/experience';
import Hobbies from './components/hobbies';
import About from './components/about';
import Home from './components/home';
import NavBar from './UI_elements/navbar';

function App() {
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />;
      break;
    case "/about":
      page = <About />;
      break;
    case "/hobbies":
      page = <Hobbies />;
      break;
    case "/experience":
      page = <Experience />;
      break;
  }
  
  return (
    <div classname="App">
      <NavBar />
      {page}
    </div>
  )
}

export default App
