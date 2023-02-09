import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../context/ProjectsContext'

function Details({ popup, setPopup, id, setId }) {

    const { portfolio, setPortfolio } = useContext(ProjectsContext);

    const togglefunc2 = () => {
        setPopup(!popup)
    }

    return (
        <>

            {
                portfolio.filter(item => item.id === id).map(item => {
                    return (
                        <div className='detailsMainContainer' key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
                            <div className='detailsinfo'>

                                <div className="detailsleftimg">
                                    <img className='detailimages' src={item.img} alt="" />
                                </div>

                                <div className="detailsright">
                                    <h1>{item.title}</h1>
                                    <b>{item.text}</b>
                                    <a href={item.link} target="_blank" style={{ textDecoration: 'none' }}>
                                        <button className='viewBTN'>
                                            View
                                            <span className="material-symbols-outlined">
                                                trending_up
                                            </span>
                                        </button>
                                    </a>
                                    <button className='popupcloseBTN' onClick={togglefunc2}><b>CLOSE</b></button>
                                    <small>{item.date}</small>
                                </div>
                            </div>

                        </div>

                    )
                })
            }

        </>

    )
}

export default Details