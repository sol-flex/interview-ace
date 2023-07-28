import React, { useState, useEffect }from 'react';
import './HomePage.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PrepPage from './components/PrepPage'
import WelcomePage from './components/WelcomePage'

const HomePage = () => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [resume, setResume] = useState("")
    const [jobDescription, setJobDescription] = useState("")

    
      const handleButtonClick = (resume, jobDescription) => {

        setResume(resume);
        setJobDescription(jobDescription);
        setButtonClicked(true);
        
      };
    
return (
    <>
      <Navbar />
      {buttonClicked ? <PrepPage resume={resume} jobDescription={jobDescription}/> : <WelcomePage onButtonClick={handleButtonClick}/>}
    </>
    );
};

export default HomePage;