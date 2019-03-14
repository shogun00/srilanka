import { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import CommentList from '../../comments/CommentList'

import client from '../../../utils/client'

const BackButton = ({ path }) => (
  <Button href={path}>
    <p>戻る</p>
  </Button>
)

const Issue = ({ issue }) => {
  // const [issue, setIssue] = useState({})
  // const [comments, setComments] = useState([])
  // const fetchIssue = async () => {
  //   const result = await client.get(`/projects/${projectId}/issues/${id}`)
  //   setIssue(result.data)
  // }
  // const fetchComments = async () => {
  //   const result = await client.get(
  //     `/projects/${projectId}/issues/${id}/comments`
  //   )
  //   setComments(result.data)
  // }
  // useEffect(() => {
  //   fetchIssue()
  //   fetchComments()
  // }, [])

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <h1>{issue.title}</h1>
          </Card.Header>
        </Card.Content>
        <Card.Content>{issue.description}</Card.Content>
      </Card>
      {/* <CommentList comments={comments} /> */}
      <CommentList />
      <BackButton path={`/projects/${issue.project_id}`} />
    </>
  )
}

Issue.getInitialProps = async function({ query }) {
  // const { query } = context
  const { project_id, id } = query
  // return { projectId: query.project_id, id: query.id }
  const resIssue = await client.get(`/projects/${project_id}/issues/${id}`)
  // const resComments = await client.get(
  //   `/projects/${project_id}/issues/${id}/comments`
  // )
  // return { issue: resIssue.data, comments: resComments.data }
  return { issue: resIssue.data }
}

export default Issue
