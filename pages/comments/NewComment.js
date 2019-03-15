import { useState } from 'react'
import { withRouter } from 'next/router'
import { Form, Button } from 'semantic-ui-react'
import client from '../../utils/client'

const handleSubmit = async (endpoint, content, reloadComments) => {
  await postNewComment(endpoint, content)
  const comments = await refetchComments(endpoint)
  reloadComments(comments)
}

const postNewComment = async (endpoint, content) => {
  const postBody = { comment: { content, user_id: 1 } }
  const res = await client.post(endpoint, postBody)
  return res.data
}

const refetchComments = async endpoint => {
  const res = await client.get(endpoint)
  const resComments = res.data
  const sortedComments = [...resComments].sort((a, b) => {
    return a.created_at > b.created_at ? 1 : -1
  })
  return sortedComments
}

const NewComment = ({ reloadComments, router: { query } }) => {
  const [content, setContent] = useState('')
  const { project_id, id } = query
  const requestEndpoint = `/projects/${project_id}/issues/${id}/comments`
  const isDisabled = content.length == 0

  return (
    <Form
      reply
      onSubmit={() => {
        console.log('new comment submit')
        handleSubmit(requestEndpoint, content, reloadComments).then(() =>
          setContent('')
        )
      }}
    >
      <Form.TextArea
        onChange={e => setContent(e.target.value)}
        value={content}
      />
      <Button
        type="submit"
        content="Submit"
        labelPosition="left"
        icon="edit"
        primary
        disabled={isDisabled}
      />
    </Form>
  )
}

export default withRouter(NewComment)
