import React, { useState, createContext, useContext } from 'react'
import App, { Container } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'

import AuthComponent, { AuthContext } from '../components/AuthComponent'

const user = { id: 1, name: 'User1', role: 'admin' }

export default class RootApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AuthContext.Provider value={user}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContext.Provider>
      </Container>
    )
  }
}

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    isSignedIn: false,
    isFetched: false,
    user: null,
  })
}
