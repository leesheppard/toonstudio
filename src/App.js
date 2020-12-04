import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile"></div>
      <div className="hud"></div>
      <div className="main">
        <div className="framer">
          <img src="https://res.cloudinary.com/leesheppard/image/upload/v1595069548/toonstudio_logo_scspcu.svg" className="App-logo" alt="Toon Studio logo" /><br />
            <h5>Traditional 2D artwork and Application development</h5>  
            <img src="https://res.cloudinary.com/leesheppard/image/upload/v1596000875/artwork/hiro_white.svg" width="200px" alt="Hiro character illustration" />
              <footer>
              <a href="https://dribbble.com/leesheppard" ><i className="fab fa-dribbble"></i></a>
              <a href="https://github.com/leesheppard" ><i className="fab fa-github-alt"></i></a>
              <a href="https://facebook.com/leesheppard" ><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/leesheppard" ><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/leesheppard" ><i className="fab fa-linkedin-in"></i></a>
              </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
