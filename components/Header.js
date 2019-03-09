import { useState, useContext } from 'react'
import Link from 'next/link'
import { Menu, Icon } from 'semantic-ui-react'

import withAuth from './withAuth'
import { AuthContext } from './AuthComponent'

const Header = () => {
  const [activeItem, setActiveItem] = useState('home')
  const user = useContext(AuthContext)

  return (
    <div>
      <Menu pointing secondary size="huge">
        {user ? (
          <>
            <Link href="/" passHref>
              <Menu.Item
                as="a"
                active={activeItem === 'home'}
                onClick={() => setActiveItem('home')}
              >
                Home
              </Menu.Item>
            </Link>
            <Link href="/projects" passHref>
              <Menu.Item
                as="a"
                active={activeItem === 'projects'}
                onClick={() => setActiveItem('projects')}
              >
                Projects
              </Menu.Item>
            </Link>
            <Menu.Item position="right">
              <Icon size="large" name="user circle" />
              {user.name}
            </Menu.Item>
          </>
        ) : (
          <Menu.Item position="right">Sign in</Menu.Item>
        )}
      </Menu>
    </div>
  )
}

export default Header
