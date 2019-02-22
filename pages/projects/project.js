import React, { Component } from 'react'
import { withRouter, router } from 'next/router'
import { List, Button } from 'semantic-ui-react'
import client from '../../utils/client'

import IssuesList from './IssuesList'

class Project extends Component {
  static async getInitialProps({ query }) {
    const res = await client.get(`/projects/${query.id}`)
    const resIssues = await client.get(`/projects/${query.id}/issues`)
    return { project: res.data, issues: resIssues.data }
  }

  projectInfo = () => {
    return <List items={this.items()} />
  }

  items = () => {
    return [
      this.projectIdTag(),
      this.projectTitleTag(),
      this.projectStatusTag(),
      // this.buttonArea(),
    ]
  }

  projectIdTag = () => {
    const { project } = this.props
    return (
      <div key="id" style={{ display: 'flex' }}>
        <p>id: </p>
        <p>{project.id}</p>
      </div>
    )
  }

  projectTitleTag = () => {
    const { project } = this.props
    return (
      <div key="title" style={{ display: 'flex' }}>
        <p>title: </p>
        <p>{project.title}</p>
      </div>
    )
  }

  projectStatusTag = () => {
    const { project } = this.props
    return (
      <div key="status" style={{ display: 'flex' }}>
        <p>status: </p>
        <p>{project.status}</p>
      </div>
    )
  }

  buttonArea = () => {
    return <div key="buttons">{this.returnTag()}</div>
  }

  returnTag = () => {
    return (
      <Button href="/projects">
        <p>戻る</p>
      </Button>
    )
  }

  render = () => {
    const { project, issues } = this.props
    return (
      <>
        {this.projectInfo()}
        <IssuesList project={project} issues={issues} />
        {this.buttonArea()}
      </>
    )
  }
}

export default withRouter(Project)
