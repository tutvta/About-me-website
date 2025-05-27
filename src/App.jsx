import React from 'react';
import Experience from './components/experience';
import Hobbies from './components/hobbies';
import About from './components/about';
import Home from './components/home';
import NavBar from './UI_elements/navbar';

function App() {
  let page;
  switch (window.location.pathname) {
    case "/About-me-website/":
      page = <Home />;
      break;
    case "/About-me-website/about":
      page = <About />;
      break;
    case "/About-me-website/hobbies":
      page = <Hobbies />;
      break;
    case "/About-me-website/experience":
      page = <Experience />;
      break;
  }
  
  return (
    <div class="">
      <NavBar />
      {page}
    </div>
  )
}

export default App
