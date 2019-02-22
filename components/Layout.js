import { Container } from 'semantic-ui-react'
import Header from './Header'

const Layout = props => (
  <>
    <Header />
    <Container style={{ marginTop: 20 }}>{props.children}</Container>
  </>
)

export default Layout
