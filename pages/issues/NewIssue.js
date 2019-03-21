import { useState, useContext } from 'react'
import Router from 'next/router'
import { Form, Input, TextArea, Card, Button } from 'semantic-ui-react'

import { AuthContext } from '../../components/AuthComponent'
import { BackButton } from '../../components/buttons'
import client from '../../utils/client'

const handleSubmit = (projectId, title, description) => {
  const requestBody = {
    issue: {
      title,
      description,
      created_user_id: 1,
    },
  }
  const res = client.post(`/projects/${projectId}/issues`, requestBody)
  console.log(res)
  Router.push(`/projects/${projectId}`)
}

const NewIssue = ({ projectId }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const user = useContext(AuthContext)

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <h1>New Issue</h1>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={() => handleSubmit(projectId, title, description)}>
            <Input
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextArea
              autoHeight
              value={description}
              placeholder="description"
              style={{ minHeight: 100, marginBottom: 10 }}
              onChange={e => setDescription(e.target.value)}
            />
            <Button color="green" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Content>
      </Card>
      <BackButton path={`/projects/${projectId}`} />
    </>
  )
}

NewIssue.getInitialProps = function(context) {
  const { id } = context.query
  return { projectId: id }
}

export default NewIssue
