import './App.css';
import TopPart from './homepageparts/TopPart';
import AboutMePart from './homepageparts/AboutMePart';
import SkillsPart from './homepageparts/SkillsPart';
import ProjectsContextProvider from './context/ProjectsContext';
import PortfolioCards from './homepageparts/PortfolioCards';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './pages/Details';
import { useState } from 'react'


function App() {

  const [popup, setPopup] = useState(false);
  const [id, setId] = useState();


  return (
    <ProjectsContextProvider>
      <Router>
        <div className="App" id='home'>
          <nav className='navbar'>
            <h1 className="logo" style={{ fontSize: 60 }}> <b>AKC</b> </h1>
            <div className="navcircle"></div>
            <ul className='navbartitles'>
              <a href="#aboutme" style={{ textDecoration: 'none', color: 'black' }}><li>About Me</li></a>
              <a href="#skills" style={{ textDecoration: 'none', color: 'black' }}><li>Skills</li></a>
              <a href="#portfolio" style={{ textDecoration: 'none', color: 'black' }}><li>Portfolio</li></a>
            </ul>
          </nav>
          <TopPart />
          <AboutMePart />
          <SkillsPart />
          <div className="slidetextdiv">
            <marquee className='slidetextleft' behavior="" direction="left" scrollamount="12" loop="infinite" id='detailscontainer'>
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
            </marquee>
            <div className="detailscontainer" >
              {
                popup && <Details
                  popup={popup}
                  setPopup={setPopup}
                  id={id}
                  setId={setId} />
              }
            </div>
            <marquee className='slidetextright' behavior="" direction="right" scrollamount="12" loop="infinite" >
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
              PORTFOLIO
            </marquee>
          </div>
          <div className="slidetextdiv"></div>
          <PortfolioCards
            popup={popup}
            setPopup={setPopup}
            id={id}
            setId={setId} />
        </div >

        <div className='aa'>
          <a href="#home" className='goUpBTN' style={{ textDecoration: 'none', color: 'black' }}><span class="material-symbols-outlined">
            expand_less
          </span></a>
        </div>

        <div className="footerMainContainer">
          <nav className='navbarbottom'>
            <h1 className="logo" style={{ fontSize: 60, color: 'white' }}> <b>AKC</b> </h1>
            <ul className='bottomtitles' style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="#home" style={{ textDecoration: 'none', color: 'black' }}><li>Home</li></a>
              <a href="#aboutme" style={{ textDecoration: 'none', color: 'black' }}><li>About Me</li></a>
              <a href="#skills" style={{ textDecoration: 'none', color: 'black' }}><li>Skills</li></a>
              <a href="#portfolio" style={{ textDecoration: 'none', color: 'black' }}><li>Portfolio</li></a>
            </ul>
          </nav>
        </div>




      </Router>

    </ProjectsContextProvider>

  );
}

export default App;
