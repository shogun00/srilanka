import React, { useState, Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Icon, List } from 'semantic-ui-react'
import axios from 'axios';

import Layout from '../../components/Layout'

const ENDPOINT = 'http://tyari.info:9999/v1'

class Projects extends Component {
  static async getInitialProps () {
    const res = await axios.get(`${ENDPOINT}/projects/`)
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
                pathname: "/projects/project",
                query: { id: project.id }
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
      <Icon name='plus square outline' onClick={() => {router.push('/projects/new')} } key="createProject" />
    )
  }

  items = () => {
    return [this.projectTags(), this.createProjectLink()]
  }
  render = () => {
    return (
      <Layout>
        <p>This is Project Page</p>
        <List items={this.items()} />
      </Layout>
    )
  }
}

export default withRouter(Projects)
