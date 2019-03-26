// import { useContext } from 'react'
import { Container } from 'semantic-ui-react'
import Header from './Header'

const Layout = props => {
  return (
    <>
      <Header user={props.user} />
      <Container style={{ marginTop: 20 }}>{props.children}</Container>
    </>
  )
}

export default Layout
