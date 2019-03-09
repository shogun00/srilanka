import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const SignIn = () => (
  // <Segment basic textAlign="center">
  <Form>
    <Form.Input
      icon="user"
      iconPosition="left"
      label="Login ID"
      placeholder="Login ID"
    />
    <Form.Input
      icon="lock"
      iconPosition="left"
      label="Password"
      placeholder="password"
    />
    <Button content="Sign In" primary />
  </Form>
  // </Segment>
)

export default SignIn
