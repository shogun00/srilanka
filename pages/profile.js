import nextCookie from 'next-cookies'
import { withAuth } from '../components/withAuth'

const Profile = ({ user }) => <p>{user.name}</p>

// Profile.getInitialProps = async ctx => {
//   const { token } = nextCookie(ctx)
//   return { data: { id: 1, name: 'User2', role: 'admin' } }
// }

export default withAuth(Profile)
