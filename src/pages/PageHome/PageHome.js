/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './PageHome.scss';
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
// Gsap Imports\

function Home () {
    return (
        <>
        <section>
            <h1>
                About Me
            </h1>   
            
            <p>
                I'm a C# Unity Game Developer who participated in too many game jams and started making websites. I have Full-Stack MERN, C# Unity Editor, and audio production experience.
            </p>
        </section>
        
        <section>
            
            <h1>
                Featured Projects
            </h1> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <ProjectsGallery/>

        </section>
        </>
    )
}

export default Home;