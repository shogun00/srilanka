import Link from 'next/link'
import { Menu, Segment } from 'semantic-ui-react'

import styled from 'styled-components'

const HeaderLink = styled.a`
  margin-right: 15;
`

const Header = () => (
  <div>
    <Link href="/">
      <HeaderLink>Home</HeaderLink>
    </Link>
    <Link href="/projects">
      <HeaderLink>Projects</HeaderLink>
    </Link>
  </div>
)

export default Header
