import React, { useState, useEffect } from 'react';
import './PrepPage.css';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const PrepPage = ({ jobDescription, resume }) => {
    const [bruh, setBruh] = useState([])
    const [loading, setLoading] = useState(true);


useEffect(() => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY

    const messages = [
        {"role": "system", "content": "You are helping the user prepare for a job interview based on their resume and \
        the job description. You will provide answers to common interview questions using the job description and resume \
        to provide compelling answers painting the candidate in the best possible light. Provide a response back as a valid JSON object \
        each index in the array will be an answer to the questions in order:    \
             ['answer to question 1', 'answer to question 2', 'answer to question 3'...]                                   \
            Just provide the text of the answer, do not prefix it with a number. Do not do ['1. answer', '2. answer' ] but rather ['answer', 'answer' ] \
         "},
        {role: "user", content: `This is the job description: /// ${jobDescription} \
        /// and this is the users resume /// ${resume} /// \
        Based on the job description and resume, provide responses to the following questions:
        1. What do you know about [Company in job description]?

        2. Can you walk me through your background? (Tailor this response using examples from the users \
            resume matching to the job description to provide a compelling story about how their experience \
            and how that experience makes them a good candidate for the role
            )
        3. Why do you want to work in this role? 

        4. Do you have any questions for me? (Provide the user with a few good questions to ask the interviewer about the role )

        `}
    ]

    let requestData = {
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.5,
        n: 1
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`, 
        },
        body: JSON.stringify(requestData),
      })
        .then(response => response.json())
        .then(async responseData => {

          console.log("response data: ", JSON.parse(responseData.choices[0].message.content));
          setBruh(JSON.parse(responseData.choices[0].message.content));
          setLoading(false);

        })
        .catch(error => {
          console.error("This is the error: ", error);
        });

}, [])

const parseResponseData = (responseObj) => {

}


return (
    <>
        <Navbar />

        <div class="container">
            <div class="content">
            <div class="sidebar">
                <button id="new-chat-btn">Start New Chat</button>
                <div class="chat-history">
                </div>
            </div>

            <div class="main-chat">
                {loading ? <p>Loading...</p> : 
                
                <>
                    <h2>What do you know about the company?</h2>
                    <div className="answer">
                        <p>{bruh[0]}</p>
                    </div>

                    <h2>Walk me through your resume?</h2>
                    <div className="answer">
                        <p>{bruh[1]}</p>
                    </div>

                    <h2>Why do you want to work in this role?</h2>
                    <div className="answer">
                        <p>{bruh[2]}</p>
                    </div>

                    <h2>Do you have any questions for me?</h2>
                    <div className="answer">
                        <p>{bruh[3]}</p>
                    </div>
                </>
                
                }
            </div>
            </div>
        </div>
    </>
    );
};

export default PrepPage;