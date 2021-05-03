import React from 'react';
import suggestMyMovieLogo from './media/suggestMyMovieLogo.png'
import './css/App.css'


export default function App() {
  return (
    <div className="suggestMyMovieApp">
      <header>
        <nav id="nav" className="nav">
          <img src={suggestMyMovieLogo} alt="suggestMyMovieLogo" id="suggestMyMovieLogo" />
          <div id="nav-right">
            <ul>
              <li className="current" ><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <h1>suggestMyMovie</h1>
          </div>
        </nav>
      </header>
    </div>
  )
}

