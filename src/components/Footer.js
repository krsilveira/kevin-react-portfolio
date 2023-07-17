import React from 'react'
import githubLogo from '../images/github-mark.png';
import linkedIn from '../images/LI-In-Bug.png';
import twitter from '../images/twitter.png';

const Footer = () => {
    return (<>
        <footer className='d-flex justify-content-center' >
            <ul className='row list-unstyled footer-ul'>
                <li className='col' ><a href='https://github.com/krsilveira' target="_blank" rel="noopener noreferrer" title='GitHub'>
                    <img className='github-icon' src={githubLogo} alt='github icon' ></img></a></li>
                <li className='col'><a href='https://www.linkedin.com/in/rskevin/' target="_blank" rel="noopener noreferrer" title='linkedIn'>
                    <img src={linkedIn} className='linkedin-icon' alt='linkedIn icon'></img></a></li>
                <li className='col'><a href='https://twitter.com/Krodriguez12K' target="_blank" rel="noopener noreferrer" title='Twitter'>
                    <img src={twitter} className='twitter-icon' alt='twitter icon'></img></a></li>
            </ul>
        </footer>
    </>
    )
}

export default Footer