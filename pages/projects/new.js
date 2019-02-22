import React, { useState, Component } from 'react'
import { withRouter } from 'next/router'
import { List, Button } from 'semantic-ui-react'
import client from '../../utils/client'

import Layout from '../../components/Layout'

const NewProject = ({ router }) => {
  const titleTag = () => {
    return (
      <div className="flex" key="titleTag">
        <p>title</p>
        <input type="text" name="title" />
      </div>
    )
  }
  const buttonArea = () => {
    return (
      <Button.Group key="buttonArea">
        {submitTag()}
        <Button.Or />
        {returnTag()}
      </Button.Group>
    )
  }

  const onSubmit = () => {
    client.post('/projects/', { project: { title: 'test' } }).then(res => {
      router.push('/projects')
    })
  }

  const submitTag = () => {
    return (
      <Button primary onClick={onSubmit}>
        登録
      </Button>
    )
  }

  const returnTag = () => {
    return (
      <Button href="/projects">
        <p>戻る</p>
      </Button>
    )
  }
  const items = () => {
    return [titleTag(), buttonArea()]
  }

  return (
    <Layout>
      <p>Create Project Page</p>
      <List items={items()} />
    </Layout>
  )
}

export default withRouter(NewProject)
