import { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import Layout from '../../../components/Layout'
import CommentList from './CommentList'

import client from '../../../utils/client'

const Issue = ({ issue, comments }) => (
  <Layout>
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <h1>{issue.title}</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>{issue.description}</Card.Content>
    </Card>
    <CommentList comments={comments} />
  </Layout>
)

Issue.getInitialProps = async function(context) {
  const { project_id, id } = context.query
  const resIssue = await client.get(`/projects/${project_id}/issues/${id}`)
  const resComments = await client.get(
    `/projects/${project_id}/issues/${id}/comments`
  )
  return { issue: resIssue.data, comments: resComments.data }
}

export default Issue
