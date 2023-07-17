import { useContext } from 'react'
import { PageContext } from '../PageProvider'
import Project from '../components/Project'
import projectData from '../utils/projects'

const Portfolio = () => {
  console.log("Portfolio")
  const { page } = useContext(PageContext)
  if (page !== "portfolio") {
    return (<>{""}</>)
  }
  return (
    <div className='mt-5'>
      <h1>Portfolio</h1>
      <div className='row justify-content-center yellowbg'>
        {projectData.map((project) => (<Project
          title={project.title} screenshot={project.screenshot} github={project.github} website={project.website} />))}
      </div>
    </div>
  )
}

export default Portfolio