import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const About = () => {
    console.log("About")

    const { page } = useContext(PageContext)
    if (page !== "about me") {
        return (<>{""}</>)
    }

    return (<>
        <div className="about-page mt-5">
            <div>
                <h1>About Me</h1>
                
            </div>
            <div className="about-me">
                <p className="pt-3">Hello! My name is Kevin Silveira Rodriguez and I am on my journey to become a Full-Stack Web Developer.
                    As I am going through a transitional period, I come with a deep background in sales and analyst. With an few good projects under my portfolio, I am seeking my first developer role!</p>
                <p className="pt-3">I have experience in fontend, backend, and fullstack applications using a variety of technologies including
                    Javascript, Node, HTML, CSS, Express, React, GraphQL, MySQL/NoSQL, and MongoDB.</p>
                <p className="pt-3"> When im not studying code, I balance my day between gym and video games.</p>
            </div>
        </div>
    </>)
}

export default About