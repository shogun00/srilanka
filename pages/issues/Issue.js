import { Card } from 'semantic-ui-react'
import CommentList from '../comments/CommentList'
import { BackButton } from '../../components/buttons'
import client from '../../utils/client'

const Issue = ({ issue }) => (
  <>
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <h1>{issue.title}</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>{issue.description}</Card.Content>
    </Card>
    <CommentList />
    <BackButton path={`/projects/${issue.project_id}`} />
  </>
)

Issue.getInitialProps = async function({ query }) {
  const { project_id, id } = query
  const resIssue = await client.get(`/projects/${project_id}/issues/${id}`)
  return { issue: resIssue.data }
}

export default Issue
