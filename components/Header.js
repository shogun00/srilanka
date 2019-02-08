import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

const Header = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <div>
      <Menu pointing secondary>
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
      </Menu>
    </div>
  )
}

export default Header
