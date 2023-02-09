import React, { useContext, useState } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'
import Details from '../pages/Details';

function PortfolioCards({ popup, setPopup, id, setId }) {

    const { portfolio } = useContext(ProjectsContext);

    // const [popup, setPopup] = useState(false);
    // const [id, setId] = useState();

    const togglefunc = (id) => {
        setPopup(true)
        setId(id);
    }

    return (
        <div className="cardsMainContainer">

            {/* <div className="detailscontainer" id='detailscontainer'>
                {
                    popup && <Details
                        popup={popup}
                        setPopup={setPopup}
                        id={id}
                        setId={setId} />
                }
            </div> */}

            {
                portfolio.map(item => {
                    return (
                        <div className='card' key={item.id} id='portfolio'>

                            <div className="circle"></div>
                            {/* <img src={item.img} alt="" /> */}
                            <div className="imgdiv">{item.id}</div>
                            <div className="content">
                                <h2>{item.title}</h2>
                                <h4 style={{ fontWeight: 500 }}>What Did I Use?</h4>
                                <div>

                                    {
                                        item.subtitles.map(subs => {
                                            return (
                                                <h4 style={{ fontWeight: 300 }}>- {subs}</h4>
                                            )
                                        })
                                    }
                                </div>
                                <a href={item.link} target="_blank" style={{ textDecoration: 'none' }}>
                                    <button className='viewBTN'>
                                        View
                                        <span className="material-symbols-outlined">
                                            trending_up
                                        </span>
                                    </button>
                                </a>
                                <a href="#detailscontainer"><button className='popupcloseBTN' onClick={() => togglefunc(item.id)}> <b>Details</b> </button></a>
                                <small>{item.date}</small>
                            </div>
                        </div>
                    )
                })
            }



        </div>

    )
}

export default PortfolioCards