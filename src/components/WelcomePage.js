import React, { useState }from 'react';
import './WelcomePage.css';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const WelcomePage = ({ onButtonClick }) => {

    const [resume, setResume] = useState("")
    const [jobDescription, setjobDescription] = useState("")

    const handleChangeResume = (event) => {
        const newValue = event.target.value;
        setResume(newValue);
      };
    
      const handleChangeJD = (event) => {
        const newValue = event.target.value;
        setjobDescription(newValue);
      };

      const handleClick = () => {
        onButtonClick(resume, jobDescription)
      }
return (
    <div>
        <Navbar />

        <div class="container">
            <div class="content">
            <div class="sidebar">
                <button id="new-chat-btn">Start New Chat</button>
                <div class="chat-history">
                </div>
            </div>
            <div class="main-chat">
                    <h1>1.</h1>
                    <p>Paste the text from the job description:</p>
                    <textarea id="job-description" value={jobDescription} onChange={handleChangeJD}/>
                    <h2>2.</h2>
                    <p>Paste the text from your resume:</p>
                    <textarea id="resume" value={resume} onChange={handleChangeResume}/>
                    <button id="prepare-interview" onClick={handleClick}>Prepare for your interview</button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default WelcomePage;