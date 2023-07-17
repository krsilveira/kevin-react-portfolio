import React from 'react'


const Project = ({ screenshot, title, description, github, website }) => {
    return (
        <><div className="card m-2" style={{ width: '18rem' }}>
            <img className="card-img-top" src={screenshot} alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className='link-border'>
                    <a href={github} className="btn">GitHub Repo</a>
                    <a href={website} className="btn">Website</a>
                </div>
            </div>
        </div>
        </>
    )
}



export default Project