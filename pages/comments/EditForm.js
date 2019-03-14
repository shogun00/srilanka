import { useState } from 'react'
import styled from 'styled-components'
import { Form, Button } from 'semantic-ui-react'

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

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default EditForm
