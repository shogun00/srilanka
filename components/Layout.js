import { useContext } from 'react'
import { Container } from 'semantic-ui-react'
import Header from './Header'

import { AuthContext } from '../components/AuthComponent'

const Layout = props => {
  const user = useContext(AuthContext)
  return (
    <>
      {console.log(user)}
      <Header />
      <Container style={{ marginTop: 20 }}>{props.children}</Container>
    </>
  )
}

export default Layout
