import React, { Component, useContext } from 'react'
import { Router } from 'next/router'
import { AuthContext } from './AuthComponent'

const signinPath = '/sign_in'

const signOut = () => {
  // TODO: Remove token from localStorage
  Router.push(signinPath)
}

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

const withAuth = WrappedComponent =>
  class extends Component {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`
    static async getInitialProps(ctx) {
      const token = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))
      return { ...componentProps, token }
    }
    // const { isSignedIn, isFetched, user } = auth

    render() {
      console.log(this.props)
      // const auth = useContext(AuthContext)
      return (
        <AuthContext.Consumer>
          {user => <WrappedComponent user={user} {...this.props} />}
        </AuthContext.Consumer>
      )
    }
  }

export const auth = ctx => {
  // const token = localStorage.getItem('auth_token')
  const token = null

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: signinPath })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push(signinPath)
  }
}
export default withAuth
