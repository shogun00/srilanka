import { Header } from 'semantic-ui-react'
import { withAuth } from '../../components/withAuth'
import client from '../../utils/client'
import { BackButton } from '../../components/buttons'
import IssuesList from '../issues/IssuesList'

const Project = ({ project, issues }) => (
  <>
    <Header as="h2">{project.title}</Header>
    <IssuesList project={project} issues={issues} />
    <BackButton path="/projects" />
  </>
)

Project.getInitialProps = async ({ query }) => {
  const { id } = query
  const res = await client.get(`/projects/${id}`)
  const resIssues = await client.get(`/projects/${id}/issues`)
  return { project: res.data, issues: resIssues.data }
}

export default withAuth(Project)
