import { Card } from 'semantic-ui-react'
import Layout from '../../../components/Layout'

const CommentList = ({ comments }) =>
  comments.map((comment, i) => <Comment key={i} comment={comment} />)

const Comment = ({ comment }) => (
  <Card fluid>
    <Card.Content>{comment.content}</Card.Content>
  </Card>
)

export default CommentList
