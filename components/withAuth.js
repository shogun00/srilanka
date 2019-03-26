import React, { Component, useContext } from 'react'
import Router from 'next/router'
import { AuthContext } from './AuthComponent'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import Layout from './Layout'

const tokenKey = 'token'
const signinPath = '/sign_in'

const demoUser = { id: 1, name: 'User1', role: 'admin' }

export const signin = async ({ token }) => {
  cookie.set(tokenKey, token, { expires: 1 })
  Router.push('/')
}

export const signout = () => {
  cookie.remove(tokenKey)
  window.localStorage.setItem('signout', Date.now())
  Router.push(signinPath)
}

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuth = WrappedComponent =>
  class extends Component {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`
    static async getInitialProps(ctx) {
      const token = auth(ctx)
      const user = token ? demoUser : null

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))
      return { ...componentProps, token, user }
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncSignout)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncSignout)
      window.localStorage.removeItem('signout')
    }

    syncSignout = event => {
      if (event.key === 'signout') {
        console.log('signout from storage')
        Router.push(signinPath)
      }
    }

    render() {
      console.log(this.props)
      // const auth = useContext(AuthContext)
      return (
        // <AuthContext.Consumer>
        //   {user => <WrappedComponent user={user} {...this.props} />}
        // </AuthContext.Consumer>
        <Layout user={this.props.user}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: signinPath })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push(signinPath)
  }

  return token
}
