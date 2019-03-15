import { useState } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { Form, Button } from 'semantic-ui-react'
import client from '../../utils/client'

const handleSubmit = async (
  updateCommentEndpoint,
  fetchCommentsEndpoint,
  content,
  reloadComments
) => {
  await putComment(updateCommentEndpoint, content)
  const comments = await refetchComments(fetchCommentsEndpoint)
  reloadComments(comments)
}

const putComment = async (endpoint, content) => {
  const requestBody = { comment: { content } }
  const res = await client.put(endpoint, requestBody)
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

const EditForm = ({ router: { query }, comment, onClick, reloadComments }) => {
  const [editedContent, setEditedContent] = useState(comment.content)
  const { project_id } = query
  const { issue_id, id } = comment
  const fetchCommentsEndpoint = `/projects/${project_id}/issues/${issue_id}/comments`
  const updateCommentEndpoint = `/projects/${project_id}/issues/${issue_id}/comments/${id}`

  return (
    <Form
      reply
      onSubmit={() => {
        console.log('edit subbmit')
        handleSubmit(
          updateCommentEndpoint,
          fetchCommentsEndpoint,
          editedContent,
          reloadComments
        )
        onClick()
      }}
    >
      <Form.TextArea
        onChange={e => setEditedContent(e.target.value)}
        value={editedContent}
      />
      <FormButtonsContainer>
        <Button
          type="submit"
          content="Update"
          labelPosition="left"
          icon="edit"
          primary
        />
        <Button type="button" onClick={onClick}>
          Cancel
        </Button>
      </FormButtonsContainer>
    </Form>
  )
}

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default withRouter(EditForm)
