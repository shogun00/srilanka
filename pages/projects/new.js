import React, { useState, Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { List, Button } from 'semantic-ui-react'
import axios from 'axios';

import Layout from '../../components/Layout'

const ENDPOINT = 'http://tyari.info:9999/v1'

const NewProject = ({ router }) =>  {
  const titleTag = () => {
    return (
      <div className="flex" key="titleTag">
        <p>title</p><input type="text" name="title" />
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
    axios.post(`${ENDPOINT}/projects/`, {project: {title: 'test'}}).then( (res) => {
      router.push('/projects')
    })
  }

  const submitTag = () => {
    return (
      <Button primary onClick={onSubmit}>登録</Button>
    )
  }

  const returnTag = () => {
    return (
      <Button href='/projects'>
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
