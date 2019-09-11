import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import tw from 'tailwind.macro'
import { HamburgerCollapse } from 'react-animated-burgers'

const navItem = css`
  ${tw`no-underline shadow-none py-6 text-lg hover:text-black md:uppercase md:pr-8 md:text-sm md:text-gray-500 md:font-semibold md:tracking-wider md:py-4`};
`
const HamburgerStyled = styled(HamburgerCollapse)`
  ${tw`pb-0 px-0 outline-none border-0 focus:outline-none focus:border-0`};
`

const Menu = styled.div`
  ${tw`inset-0 bg-white z-10 h-full w-full fixed md:static md:inset-auto`};
`

function Nav() {
  const rootPath = `${__PATH_PREFIX__}/`
  const [open, toggle] = useState(false)

  return (
    <header className="pb-8">
      <nav className="relative flex justify-between items-center z-20">
        <h1 className="mb-0">
          <Link to={'/'}>
            <svg
              className="h-8"
              width="147"
              height="28"
              viewBox="0 0 147 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.234 18.78l18 7.926v-5.178L6.077 16.645v-.23l12.157-4.884V6.354l-18 7.926v4.5zM35.574 27h5.446V15.89c0-2.416 1.764-4.078 4.168-4.078.754 0 1.79.128 2.3.295V7.274a8.172 8.172 0 0 0-1.712-.192c-2.2 0-4.002 1.279-4.718 3.708h-.204V7.364h-5.28V27zm21.977-11.352c.012-2.531 1.52-4.014 3.72-4.014 2.186 0 3.503 1.431 3.49 3.835V27h5.446V14.497c0-4.577-2.685-7.39-6.776-7.39-2.914 0-5.024 1.433-5.906 3.721h-.23V7.364h-5.19V27h5.446V15.648zM83.535 27.32c3.17 0 4.82-1.829 5.574-3.465h.23V27h5.37V.818h-5.434v9.844h-.166c-.729-1.598-2.301-3.554-5.587-3.554-4.308 0-7.952 3.35-7.952 10.1 0 6.57 3.49 10.112 7.965 10.112zm1.726-4.334c-2.672 0-4.13-2.378-4.13-5.804 0-3.4 1.432-5.74 4.13-5.74 2.646 0 4.129 2.237 4.129 5.74s-1.508 5.804-4.13 5.804zM100.986 27h5.446V15.89c0-2.416 1.764-4.078 4.167-4.078.755 0 1.79.128 2.302.295V7.274a8.18 8.18 0 0 0-1.713-.192c-2.199 0-4.002 1.279-4.718 3.708h-.204V7.364h-5.28V27zm45.723-8.22v-4.5l-18-7.926v5.177l12.158 4.884v.23l-12.158 4.883v5.178l18-7.926z"
                fill="#000"
              />
            </svg>
          </Link>
        </h1>

        <div className="z-40 md:hidden">
          <HamburgerStyled
            buttonWidth={30}
            isActive={open}
            toggleButton={() => toggle(!open)}
          />
        </div>
      </nav>
      <Menu id="navMenu" className={`${open ? 'block' : 'hidden md:block'}`}>
        <div className="relative h-full pt-16 pl-8 md:pt-0 md:pl-0">
          <div className="h-full flex flex-col md:flex-row">
            <Link to={'/projects'} activeClassName="active" css={navItem}>
              Projects
            </Link>
            <Link to={'/services'}  activeClassName="active" css={navItem}>
              Services
            </Link>
            <Link to={'/articles'}  activeClassName="active" css={navItem}>
              Articles
            </Link>
            <Link to={'/contact'}  activeClassName="active" css={navItem}>
              Contact
            </Link>
          </div>
        </div>
      </Menu>
    </header>
  )
}

export default Nav
