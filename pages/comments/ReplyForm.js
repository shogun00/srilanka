import styled from 'styled-components'
import { Form, Button } from 'semantic-ui-react'

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

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ReplyForm
