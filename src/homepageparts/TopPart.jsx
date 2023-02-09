import React, { useState, useEffect } from 'react'
import MyCV from '../CV/CV.pdf'

{/* <a href="CV/CV.pdf" download>
    <button class="btn btn-primary my-3">Download CV
        <span class="material-symbols-outlined">
            description
        </span>
    </button>
</a> */}

// C:\Users\ASUS\Desktop\React Projects\06.02.2023\src\CV\CV.pdf
// C:\Users\ASUS\Desktop\React Projects\06.02.2023\src\CV.pdf

function TopPart() {

    return (
        <div className='topPartMainContainer'>

            <div className="toppartscrolldownside">
                <div className="scrolldown">
                    <hr /> Scroll Down
                </div>
            </div>
            <div className="toppartcoverleftside">
                <h1 className='breattakingtext'>breathing <br /> code</h1>
                <div className="toprightcontainer">
                    <div className="toprighttext">
                        <h2>Ali Kemal Çetindere</h2>
                        <p style={{ width: "80%" }}>
                            Hi. I'm Ali Kemal, my journey begins just a couple mounts ago... <br /><br />
                            - Self-taught developer,<br /><br />
                            - Looking forward to what come next,<br /><br />
                            - Passionate to learn new technologies.<br />
                        </p>
                        <a href={MyCV} download='AKC_CV.pdf'>
                            <button className='downloadCvBTN'>Download CV</button>
                        </a>
                    </div>
                    <div className="toprightphoto"></div>
                </div>
            </div>

        </div>
    )
}

export default TopPart