import React from 'react';
import MyCV from '../CV/CV.pdf'

function AboutMePart() {
    return (
        <div className='aboutMemainContainer' id='aboutme'>
            <div className="aboutmepartParent">
                <div className="firstChild">
                    <div className="whoami">Who <br />  Am <br /> I</div>
                </div>

                <div className="abouttextdiv">
                    With a passion for production and development, I decided to devote full time to my dream job, software engineering. During the pandemic, I gained experience in website development and SEO as a freelance. I am currently learning HTML, CSS, JavaScript, React and other amazing technologies full time. <br /><br />

                    I dedicate myself full time every day to learning about this and the amazing technologies that follow. I look forward to gaining a place in working life, which will teach me a lot on this journey, and I look forward to doing my best.
                </div>

            </div>
            <a style={{ marginLeft: 20,fontSize:20,color:'black' }} href="https://github.com/alkm-cet" target='blank'>My Github Account</a>
        </div>
    )
}

export default AboutMePart