import { useState } from 'react'
import axios from 'axios'
import { Form, Input, TextArea, Card, Button } from 'semantic-ui-react'
import Layout from '../../../components/Layout'

const ENDPOINT = 'http://tyari.info:9999/v1'

// const projectId = 1

const handleSubmit = (projectId, title, description) => {
  const requestBody = {
    issue: {
      title,
      description,
      created_user_id: 1,
    },
  }
  // alert(title)
  const res = axios.post(
    `${ENDPOINT}/projects/${projectId}/issues`,
    requestBody
  )
  console.log(res)
}

const NewIssue = ({ url: { query } }) => {
  console.log(query)
  const projectId = query.id
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Layout>
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
    </Layout>
  )
}

export default NewIssue
