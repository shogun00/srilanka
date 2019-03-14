import { useState } from 'react'
import { withRouter } from 'next/router'
import { Form, Button } from 'semantic-ui-react'
import client from '../../utils/client'

const handleSubmit = async (endpoint, content) => {
  const requestBody = { comment: { content } }
  await client
    .post(endpoint, requestBody)
    .then(res => {
      console.log('success')
      return res
    })
    .catch(() => {
      console.log('Error')
    })
}

const refetchComments = async endpoint => {
  await client
    .get(endpoint)
    .then(res => {
      console.log('!!!!!!!!!!!!!!!')
      console.log(res)
      return res.data
    })
    .catch(error => console.log(error))
}

const NewComment = ({ fetchComments, router }) => {
  const [content, setContent] = useState('')
  const { project_id, id } = router.query
  const requestEndpoint = `/projects/${project_id}/issues/${id}/comments`
  const isDisabled = content.length == 0

  return (
    <Form
      reply
      onSubmit={() => {
        console.log('new comment submit')
        handleSubmit(requestEndpoint, content).then(() => {
          // refetchComments(requestEndpoint, fetchComments)
          client
            .get(requestEndpoint)
            .then(res => {
              setContent('')
              console.log('*********************')
              console.log(res.data)
              fetchComments(res.data)
            })
            .catch(error => console.log(error))
          // router.push(`/projects/${project_id}/issues/${id}`)
        })
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
