import { useState } from 'react'
import Router from 'next/router'
import client from '../../../utils/client'
import { Form, Input, TextArea, Card, Button } from 'semantic-ui-react'

const handleSubmit = (projectId, title, description) => {
  const requestBody = {
    issue: {
      title,
      description,
      created_user_id: 1,
    },
  }
  // alert(title)
  const res = client.post(`/projects/${projectId}/issues`, requestBody)
  console.log(res)
  Router.push(`/projects/${projectId}`)
}

const NewIssue = ({ projectId }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
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
  )
}

NewIssue.getInitialProps = function(context) {
  const { id } = context.query
  return { projectId: id }
}

export default NewIssue
