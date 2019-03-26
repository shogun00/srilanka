import Layout from '../components/Layout'
import { withAuth } from '../components/withAuth'

const Index = () => <p>Welcome to next.js!</p>

export default withAuth(Index)
