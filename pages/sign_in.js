import { useState } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout'
import { signin } from '../components/withAuth'
import client from '../utils/client'

const SignIn = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleChangeId = e => setId(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    // Todo: ↓ dummy token for development
    const token = 'aaa'
    signin({ token })

    // Todo: ↓production code
    // try {
    //   const response = await client('/sign_in', {
    //     login_id: id,
    //     password,
    //   })
    //   if (response.ok) {
    //     const { token } = await response.json()
    //     signin({ token })
    //   } else {
    //     console.log('Sign in failed')
    //     let error = new Error(response.statusText)
    //     error.response = response
    //     throw error
    //   }
    // } catch (err) {
    //   console.log(err)
    //   setError(error.message)
    // }
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          icon="user"
          name="id"
          iconPosition="left"
          label="Login ID"
          placeholder="Login ID"
          onChange={handleChangeId}
        />
        <Form.Input
          icon="lock"
          type="password"
          name="password"
          iconPosition="left"
          label="Password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <Button content="Sign In" primary />
      </Form>
    </Layout>
  )
}

export default SignIn
