import React from 'react'

function SkillsPart() {
    return (
        <div className='skillsPartMainContainer' id='skills'>


            <div className="skillsmaincircle">
                <h1 className='responsivemyskilltext'>MY SKİLLS</h1>
                <div className="circletopsquare">

                    <div className="topsquareleft">
                        <div className='iconcircle'><i style={{ scale: '4' }} className="fa-brands fa-html5"></i></div>
                        <h2 style={{ color: 'white' }}>HTML</h2>
                    </div>

                    <div className="topsquaremid" style={{ color: 'white' }}>My Skills</div>

                    <div className="topsquareright">
                        <h2 style={{ color: 'white' }}>REACT</h2>
                        <div className='iconcircle'><i style={{ scale: '4' }} className="fa-brands fa-react"></i></div>
                    </div>
                </div>

                <div className="circlemiddlesquare">
                    <div className="midsquareleft">
                        <div className='iconcircle'>
                            <i style={{ scale: '4' }} className="fa-brands fa-css3-alt"></i>
                        </div>
                        <h2 style={{ color: 'white' }}>CSS</h2>
                    </div>
                    <div className="midqwuareright">
                        <h2 style={{ color: 'white' }}>BOOTSTRAP</h2>
                        <div className='iconcircle'>
                            <i style={{ scale: '4' }} className="fa-brands fa-bootstrap"></i>
                        </div>
                    </div>
                </div>

                <div className="circlebottomsquare">
                    <h2 style={{ color: 'white' }}>JAVASCRIPT</h2>
                    <div className='iconcircle'>
                        <i style={{ scale: '4' }} className="fa-brands fa-square-js"></i>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default SkillsPart