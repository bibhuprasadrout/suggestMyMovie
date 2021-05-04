import React from 'react';
import suggestMyMovieLogo from './media/suggestMyMovieLogo.png'
import './css/App.css'


export default function App() {

  // movie cerification in india
  const apiURL = 'https://api.themoviedb.org/3/'
  function movieCertificationIndia(){
    let movieCertificate = `${apiURL}certification/movie/list?api_key=${process.env.REACT_APP_SECRET_KEY}`
    fetch(movieCertificate)
    .then(response => response.json())
    .then(json => {
      let objArr = json.certifications.IN
      objArr.forEach((item,index) => {
        let objArrKey = Object.keys(item)
        let objArrValue = Object.values(item)
        document.querySelector(`#certificateInfo-${index}`).innerText = `${objArrKey[0].toUpperCase()} : ${objArrValue[0]}
        
        ${objArrKey[1].toUpperCase()} : ${objArrValue[1]}`
      })
    })
  }
  return (
    <div className="suggestMyMovieApp">
      <header>
        <nav id="nav" className="nav">
          <img src={suggestMyMovieLogo} alt="suggestMyMovieLogo" id="suggestMyMovieLogo" />
          <div id="nav-right">
            <ul>
              <li className="current" ><a href="google.com">Home</a></li>
              <li><a href="google.com">About</a></li>
              <li><a href="google.com">Contact</a></li>
            </ul>
            <h1>suggestMyMovie</h1>
          </div>
        </nav>
      </header>
      <section>
        <article id="certificationInfo">
          <div id="infoHeading">Movie Certifications in India</div>
          <div id="infoSpace">
            <div id="certificateInfo-0" className="certificateInfo">{movieCertificationIndia()}</div>
            <div id="certificateInfo-1" className="certificateInfo">{movieCertificationIndia()}</div>
            <div id="certificateInfo-2" className="certificateInfo">{movieCertificationIndia()}</div>
          </div>
        </article>
      </section>
            
    </div>
  )
}

