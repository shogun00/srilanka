import React, { useState, Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Icon, List } from 'semantic-ui-react'
import client from '../../utils/client'

class Projects extends Component {
  static async getInitialProps() {
    const res = await client.get('/projects/')
    return { projects: res.data }
  }

  projectTags = () => {
    const { projects } = this.props
    return (
      <div key="projects">
        {projects.map(project => (
          <div key={project.id}>
            <p>id: {project.id}</p>
            <Link
              href={{
                pathname: '/projects/project',
                query: { id: project.id },
              }}
              as={`/projects/${project.id}`}
            >
              <a>{project.title}</a>
            </Link>
          </div>
        ))}
      </div>
    )
  }
  createProjectLink = () => {
    const { router } = this.props
    return (
      <Icon
        name="plus square outline"
        onClick={() => {
          router.push('/projects/new')
        }}
        key="createProject"
      />
    )
  }

  items = () => {
    return [this.projectTags(), this.createProjectLink()]
  }
  render = () => {
    return <List items={this.items()} />
  }
}

export default withRouter(Projects)
