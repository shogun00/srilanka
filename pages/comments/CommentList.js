import { useState, useEffect, useCallback } from 'react'
import { withRouter } from 'next/router'
import { Comment, Header } from 'semantic-ui-react'
import client from '../../utils/client'
import ReplyForm from './ReplyForm'
import EditForm from './EditForm'
import NewComment from './NewComment'

const CommentList = ({ router: { query } }) => {
  const { project_id, id } = query
  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const result = await client.get(
      `/projects/${project_id}/issues/${id}/comments`
    )
    setComments(result.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <Comment.Group>
      <Header>Comments</Header>
      {comments.map((comment, i) => (
        <CommentDetail key={i} comment={comment} />
      ))}
      <NewComment fetchComments={setComments} />
    </Comment.Group>
  )
}

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

export default withRouter(CommentList)
