import { useState } from 'react'
import Link from 'next/link'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

import { signout } from './withAuth'

const Header = ({ user }) => {
  const [activeItem, setActiveItem] = useState('home')
  console.log(user)

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
            <Menu.Menu position="right">
              <Menu.Item>
                <Dropdown
                  trigger={
                    <>
                      <Icon size="large" name="user circle" />
                      {user.name}
                    </>
                  }
                  icon={null}
                >
                  <Dropdown.Menu>
                    <Link href="/profile" passHref>
                      <Dropdown.Item text="Profile" icon="user" />
                    </Link>
                    <Dropdown.Item
                      text="Sign out"
                      icon="sign out"
                      onClick={signout}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          </>
        ) : (
          <Menu.Item position="right">Sign in</Menu.Item>
        )}
      </Menu>
    </div>
  )
}

export default Header
