import Link from 'next/link'
import { Card, List, Button } from 'semantic-ui-react'
import styled from 'styled-components'

// const initialIssues = [
//   { id: 1, title: 'Issue 1', description: 'description 1' },
//   { id: 2, title: 'Issue 2', description: 'description 2' },
//   { id: 3, title: 'Issue 3', description: 'description 3' },
//   { id: 4, title: 'Issue 4', description: 'description 4' },
// ]

const CardHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardHeadTitle = styled.h1`
  margin-bottom: 0;
`

const IssuesList = ({ project, issues }) => {
  // const [issues, setIssues] = useState(initialIssues)

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <CardHeadContainer>
            <CardHeadTitle>Issues</CardHeadTitle>
            <Link
              href={{
                pathname: '/issues/NewIssue',
                query: { id: project.id },
              }}
              as={`/projects/${project.id}/issues/new`}
            >
              <Button as="a" color="green">
                New
              </Button>
            </Link>
          </CardHeadContainer>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List divided relaxed>
          {issues.map((issue, i) => (
            <IssueItem key={i} issue={issue} />
          ))}
        </List>
      </Card.Content>
    </Card>
  )
}

const IssueItem = ({ issue }) => (
  <List.Item>
    <List.Icon color="teal" name="exclamation circle" />
    <List.Content>
      <Link
        href={{
          pathname: '/issues/Issue',
          query: { project_id: issue.project_id, id: issue.id },
        }}
        as={`/projects/${issue.project_id}/issues/${issue.id}`}
      >
        <div>
          <List.Header as="a">{issue.title}</List.Header>
          <List.Description as="a">{issue.description}</List.Description>
        </div>
      </Link>
    </List.Content>
  </List.Item>
)

export default IssuesList
