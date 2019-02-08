import React, { useState } from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const initialProjects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
]

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects)
  return (
    <Layout>
      <p>This is Project Page</p>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <p>id: {project.id}</p>
            <Link
              href={{
                pathname: '/projects/project',
                query: { id: project.id },
              }}
              as={`/projects/${project.id}`}
            >
              <a>{project.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Projects
