import { withRouter } from 'next/router'

const Project = withRouter(({ router: { query } }) => <p>{query.id}</p>)

export default Project
