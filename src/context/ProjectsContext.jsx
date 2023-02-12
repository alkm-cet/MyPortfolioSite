import React, { createContext, useState } from 'react'
import ecommerce2 from '../img/ecommerce2.PNG'
import cvmaker from '../img/cvmaker.PNG'
import unsplashapi from '../img/unsplashapi.PNG'
import figmaloginpage from '../img/loginpage.PNG'
import twitterclone from '../img/twitter2.PNG'
import cargame from '../img/cargame.PNG'
import MusicPlayer from '../img/MusicPlayer.PNG'
import onePageGrid4 from '../img/onePageGrid4.PNG'
import api3 from '../img/api3.PNG'
import quizappupdated from '../img/quizappupdated.PNG'


export const ProjectsContext = createContext();

const projects = [
    {
        id: 10,
        title: "E-Commerce Website ****",
        img: ecommerce2,
        subtitles: ['Context API', 'Router', 'Figma Design'],
        text: <div>(After clicking on the link, click on the home page from the navigation bar. There is an
            error due to page redirection.) <br /> <br /><p>
                In this project, I tried to create an e-commerce site both visually and as a feature. I used
                an open source design from figma for the homepage design. <br /><br />
                In general, the project:<br /><br />
                - The first 4 items in the product list are presented to the users on the homepage.<br />
                - Products can be added to the cart, removed from the cart or reduced in quantity.<br />
                - If the products have a discount rate, the discounted price is automatically displayed in
                the basket.<br />
                - The desired category can be filtered thanks to the left filtering buttons in the section
                where the products are located.<br />
                - Thanks to the admin panel, new products can be added and purchased, but they cannot be
                filtered for now.<br /><br />
                In the continuation of the project, improvements can be made such as the blog page, fixing
                minor bugs, correcting the shifts in the basket section, activating the membership system,
                and creating a member registration screen with a page with member information.
            </p>
        </div>,
        date: "04/02/2023",
        link: "https://alkm-cet.github.io/Ecommerce/",
        no: 1,
    },
    {
        id: 9,
        title: "CV Maker ***",
        img: cvmaker,
        subtitles: ['Context API', 'Router', 'Bootstrap'],
        text: <div>
            This work of mine allows people to create their own CVs. I developed this project on React
            using structures such as Context API and Router. I created almost all of the design using
            Bootstrap. <br /><br />
            About the application:<br /><br />
            - All required fields within the application need to be filled.<br />
            - There is also a field where you can select your photo and needs to be filled.<br />
            - After all the fields are filled, the relevant information is transferred to the template
            on the last page and as a result, your CV is ready.<br /><br />
            In order to improve and diversify the application, I would like to add in the next
            updates:<br /><br />
            -Users will be able to choose several different designs.<br />
            - After the information is filled, they can be deleted or edited instantly.<br />
            - CV can be downloaded.
        </div>,
        date: "28/01/2023",
        link: "https://2slfcz.csb.app/"
    },
    {
        id: 8,
        title: "Photo Search App ***",
        img: unsplashapi,
        subtitles: ['Unsplash API', 'React', 'Axios', 'API Search'],
        text: <div>In this application, I used the API provided by the unsplash site. In this 'Photo Search
            Application' I created on React, I used axios to pull data from the API. Using the API
            documentation, I added the codes to switch between pages and the search bar necessary to
            find the desired photo. In addition, by using the titles at the top, I provided quick access
            to the photos in the desired content.</div>,
        date: "27/01/2023",
        link: "https://26bgdg.csb.app/"
    },
    {
        id: 7,
        title: "Figma Login Page **",
        img: figmaloginpage,
        subtitles: ['Figma design into code'],
        text: <div>In this project, I put a figma design into code for the first time. I chose a project
            designed in Figma and made it usable by coding it exactly.<br /><br />
            I will continue to do this and
            similar projects in order to be able to code the designs made with Figma and understand the
            figma.<br /><br />
            I have added this project to my portfolio, which I can use later by writing the
            necessary javascript codes for the buttons and inputs in the project.</div>,
        date: "25/01/2023",
        link: "https://alkm-cet.github.io/figmaloginpage/"
    },
    {
        id: 6,
        title: "Twitter Clone **",
        img: twitterclone,
        subtitles: ['React', 'Lifting State Up', 'Prop Drilling'],
        text: <div>In this demo project,
            I developed this whole project using react. I created the components that I will use in the
            application and created the structures I wanted by importing these components where
            necessary in accordance with the structure of React. I worked with concepts such as Lifting
            State Up, which allowed me to understand state and props much better.
            <br /><br />
            I'll summarize what can be done in-app:<br />
            - On the first screen, you can register on the site and delete the registration.<br />
            - You can log in with the information you created on the login screen.<br />
            - The username will be dynamically added to the relevant parts of the page.<br />
            - You can tweet/like and delete<br />
            - You can log out from the user section at the bottom left<br />
            <br /><br />
            Additional features will be included in the project in the future.</div>,
        date: "19/01/2023",
        link: "https://seuslr.csb.app/#"
    },
    {
        id: 5,
        title: "Car Game ***",
        img: cargame,
        subtitles: ['Target events', 'If/Else conditions', 'DOM Manipulation'],
        text: <div>In this demo project,
            I worked with many nested if/else structures.
            I enabled each of the buttons on the screen to
            detect the values of its parent element and perform
            the necessary mathematical operations. This project
            will be developed by adding more cars, possibilities
            and features. <br /><br />
            - When we first start the game, we have a certain amount of money and the aim is to increase
            this money and buy all the cars.<br /><br />

            - Each car is salable as much as the probability it has written on it, and when sold, it
            generates revenue of 1.5 times its price.<br /><br />

            - The cars you buy go to your garage first, it's up to your game strategy to put them on
            sale or keep them in your garage.<br /><br />

            In the next update, the cars will have to wait until the time written on them before they
            are sold, and more cars will be added.</div>,
        date: "11/01/2023",
        link: "https://codepen.io/alkm181716/pen/mdjmeJY?editors=1010"
    },
    {
        id: 4,
        title: "Music Player ****",
        img: MusicPlayer,
        subtitles: ['Construction functions', 'Arrays', 'DOM Manipulation', 'Audio events'],
        text: <div>In this project, Javascript is mainly used. Arrays are created using the
            constructor function and the elements of these arrays are communicated with the relevant
            html tags. In this study, which dome manipulation is frequently used, the project was
            concluded by using if-else structures abundantly.</div>,
        date: "21/12/2022",
        link: "https://codepen.io/alkm181716/pen/abjzPBo"
    },
    {
        id: 3,
        title: "One Page Grid **",
        img: onePageGrid4,
        subtitles: ['- Grid'],
        text: <div>This page is a very similar copy of a design on the internet. The goal is
            to create a blog's homepage using the "grid". Photos and texts are placed using the data of
            the copied page. It is one of the first examples I made while learning the grid concept.</div>,
        date: "19/11/2022",
        link: "https://codepen.io/alkm181716/pen/WNydjZN"
    },
    {
        id: 2,
        title: "Country Info (API) **",
        img: api3,
        subtitles: ['API', 'Async Await', 'DOM Manipulation', 'Json', 'Creating Html elements'],
        text: <div>In this study, I had the chance to use the API for the first time. I pulled
            the data I wanted from the database in the desired format and assigned it to the relevant
            html tags. It was a very productive study to understand the working logic of APIs and to
            understand how to get the desired data.</div>,
        date: "23/12/2022",
        link: "https://codepen.io/alkm181716/pen/jOpbNeN"
    },
    {
        id: 1,
        title: "Quiz App ***",
        img: quizappupdated,
        subtitles: ['React'],
        text: <div>I redesigned the quiz application I used to make
            using javascript, using React. I made both visual improvements
            and updated my codes. Thanks to the advantages of React, I was able
            to re-code the application much more easily. <br /><br />
            I updated my old application and I had the opportunity to better u
            nderstand the differences between the application I made using only
            javascript and this version using react. <br /><br />
            Previous version: https://codepen.io/alkm181716/pen/poZoawE</div>,
        date: "12/02/2023",
        link: "https://j9rf1r.csb.app/"
    },
]

function ProjectsContextProvider({ children }) {

    const [portfolio, setProjects] = useState(projects)

    return (
        <ProjectsContext.Provider value={{ portfolio, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider