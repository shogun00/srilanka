import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const CommentList = ({ comments }) => (
  <Comment.Group>
    <Header>Comments</Header>
    {comments.map((comment, i) => (
      <CommentDetail key={i} comment={comment} />
    ))}
    <NewCommentForm />
  </Comment.Group>
)

const CommentDetail = ({ comment }) => {
  const [replyForm, setReplyForm] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const onClickForOpen = useCallback(() => setReplyForm(true), [])
  const onClickForClose = useCallback(() => setReplyForm(false), [])
  const onClickforEditable = useCallback(() => setEditMode(true), [])
  const onClickForUneditable = useCallback(() => setEditMode(false), [])

  return (
    <Comment>
      <Comment.Avatar
        as="a"
        src="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
      />
      <Comment.Content>
        <Comment.Author as="a">{comment.user_id}</Comment.Author>
        <Comment.Metadata>{comment.created_at}</Comment.Metadata>
        {editMode ? (
          <EditForm content={comment.content} onClick={onClickForUneditable} />
        ) : (
          <>
            <Comment.Text>{comment.content}</Comment.Text>
            <Comment.Actions>
              {replyForm ? (
                <ReplyForm onClick={onClickForClose} />
              ) : (
                <>
                  <Comment.Action onClick={onClickForOpen}>
                    Reply
                  </Comment.Action>
                  <Comment.Action onClick={onClickforEditable}>
                    Edit
                  </Comment.Action>
                </>
              )}
            </Comment.Actions>
          </>
        )}
      </Comment.Content>
    </Comment>
  )
}

const EditForm = ({ content, onClick }) => {
  const [editedContent, setEditedContent] = useState(content)

  return (
    <Form
      reply
      onSubmit={() => {
        console.log('edit subbmit')
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

const ReplyForm = ({ onClick }) => (
  <Form
    reply
    onSubmit={() => {
      console.log('submit')
      onClick()
    }}
  >
    <Form.TextArea />
    <FormButtonsContainer>
      <Button
        type="submit"
        content="Add Reply"
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

const NewCommentForm = () => {
  const [content, setContent] = useState('')

  return (
    <Form
      reply
      onSubmit={() => {
        console.log('new comment subbmit')
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
      />
    </Form>
  )
}

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default CommentList
