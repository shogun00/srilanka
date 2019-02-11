import { withRouter } from 'next/router'

import Layout from '../../components/Layout'

const Project = withRouter(({ router: { query } }) => (
  <Layout>
    <p>{query.id}</p>
  </Layout>
))

export default Project
