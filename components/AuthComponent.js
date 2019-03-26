import { useState, useEffect, createContext } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import { withAuth } from './withAuth'
import client from '../utils/client'

export const AuthContext = createContext()

// const initialUser = { id: 1, name: 'User1', role: 'admin' }
const initialUser = {}

const AuthComponent = (props, { data, children }) => {
  console.log(props)
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //   if (token) {
  //   } else {
  //     setUser(null)
  //   }
  // }, [user])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

AuthComponent.getInitialProps = async ctx => {
  console.log('*******************')
  const { token } = nextCookie(ctx)

  const redirectOnError = () =>
    process.browser
      ? Router.push('/sign_in')
      : ctx.res.writeHead(302, { Location: '/sign_in' }).end()

  return { data: { id: 1, name: 'User2', role: 'admin' } }
  // try {
  //   const response = await client('/auth/user')
  //   if (response.ok) {
  //     return await response.json()
  //   } else {
  //     return redirectOnError()
  //   }
  // } catch (error) {
  //   return redirectOnError()
  // }
}

export default AuthComponent
