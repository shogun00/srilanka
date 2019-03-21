import React, { useState } from 'react'
import Router from 'next/router'
import { Form, Input, Card, Button } from 'semantic-ui-react'
import client from '../../utils/client'
import { BackButton } from '../../components/buttons'

const NewProject = () => {
  const [title, setTitle] = useState('')
  const isDisabled = !title

  const handleSubmit = () => {
    client.post('/projects/', { project: { title } }).then(res => {
      Router.push('/projects')
    })
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <h1>New Project</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <Input
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>
          <Button.Group key="buttonArea">
            <Button color="green" type="submit" disabled={isDisabled}>
              Submit
            </Button>
            <Button.Or />
            <BackButton path="/projects" />
          </Button.Group>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default NewProject
