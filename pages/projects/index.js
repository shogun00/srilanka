import styled from 'styled-components'
import Link from 'next/link'
import { Card, Icon, List, Button } from 'semantic-ui-react'
import { withAuth } from '../../components/withAuth'
import client from '../../utils/client'

const ProjectsList = ({ projects }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        <CardHeadContainer>
          <CardHeadTitle>Projects</CardHeadTitle>
          <Link
            href={{
              pathname: '/projects/NewProject',
            }}
            as={`/projects/new`}
          >
            <Button as="a" color="green">
              <Icon name="plus" />
              New
            </Button>
          </Link>
        </CardHeadContainer>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <List divided relaxed>
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </List>
    </Card.Content>
  </Card>
)

ProjectsList.getInitialProps = async () => {
  const res = await client.get('/projects/')
  return { projects: res.data }
}

const ProjectItem = ({ project }) => (
  <List.Item>
    <List.Icon color="teal" name="exclamation circle" />
    <List.Content>
      <Link
        href={{
          pathname: '/projects/project',
          query: { id: project.id },
        }}
        as={`/projects/${project.id}`}
      >
        <div>
          <List.Header as="a">{project.title}</List.Header>
        </div>
      </Link>
    </List.Content>
  </List.Item>
)

const CardHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardHeadTitle = styled.h1`
  margin-bottom: 0;
`

export default withAuth(ProjectsList)
