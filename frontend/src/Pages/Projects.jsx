import React from 'react'
import { ProjectContainer } from '../Components/UI/ProjectContainer'

export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen'>
      <h1 className='text-center text-2xl md:text-4xl font-semibold'>My Projects</h1>

      <div >
        <h1 >Projects</h1>
      </div>
      <div >
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />

        <ProjectContainer />
        <ProjectContainer />

      </div>
    </section >
  )
}
