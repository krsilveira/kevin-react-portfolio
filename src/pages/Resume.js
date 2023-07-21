import { useState, useContext } from 'react'
import { PageContext } from '../PageProvider'

const Resume = () => {

  const { page } = useContext(PageContext);
  if (page !== "resume") {
    return (<>{''}</>);
  }

  const handleDownloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/Resume2023 copy.pdf'; // Update with the actual file path and name

    // link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume2023 copy.pdf'; // Specify the desired file name

    // trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-5'>
      <h1 className='yellowbg'>Resume</h1>
      <div className='bluebg p-4'>
        <button className='btn btn-resume' onClick={handleDownloadResume}>Download Resume</button>
        <h2 className='pt-3'>Proficiencies</h2>
        <ul>
          <li>Javascript</li>
          <li>Node</li>
          <li>Express</li>
          <li>Handlebars</li>
          <li>MySQL/NoSQL</li>
          <li>Sequelize</li>
          <li>HTML5/CSS3</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume