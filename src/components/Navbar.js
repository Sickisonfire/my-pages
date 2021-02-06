import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import DropdownMenu from './DropdownMenu'

const profileDropDownItems = [
  { link: '/register', text: 'register account' },
  { link: '/', text: 'visite Homepage' },
  { link: '/login', text: 'login' },
]
const notificationDropdownItems = [
  { link: '/register', text: 'Peter has left a comment' },
  { link: '/', text: 'Get premium Membership right now!' },
  { link: '/login', text: 'test' },
]

export const Navbar = () => {
  const [openMobileMenu, setopenMobileMenu] = useState(false)
  let { pathname } = useLocation()

  const handleClick = (e) => {
    e.preventDefault()
    setopenMobileMenu(!openMobileMenu)
  }
  return (
    <nav tw='bg-gray-800'>
      <div tw='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div tw='relative flex items-center justify-between h-16'>
          <div tw='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={handleClick}
              tw='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded='false'
            >
              <span tw='sr-only'>Open main menu</span>

              <svg
                tw='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                tw='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div tw='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div tw='flex-shrink-0 flex items-center'>
              <Logo />
            </div>
            <div tw='hidden sm:block sm:ml-6'>
              <div tw='flex space-x-4'>
                <Link
                  to='/dashboard'
                  css={[
                    tw`text-gray-300  px-3 py-2 rounded-md text-sm font-medium`,
                    pathname === '/dashboard' ? tw`bg-gray-900 text-white` : tw`hover:bg-gray-700`,
                  ]}
                >
                  Dashboard
                </Link>
                <Link
                  to='/'
                  css={[
                    tw`text-gray-300  px-3 py-2 rounded-md text-sm font-medium`,
                    pathname === '/' ? tw`bg-gray-900 text-white` : tw`hover:bg-gray-700`,
                  ]}
                >
                  Landing
                </Link>
                <Link
                  to='/register'
                  css={[
                    tw`text-gray-300  px-3 py-2 rounded-md text-sm font-medium`,
                    pathname === '/register' ? tw`bg-gray-900 text-white` : tw`hover:bg-gray-700`,
                  ]}
                >
                  Register
                </Link>
                <Link
                  to='/login'
                  css={[
                    tw`text-gray-300  px-3 py-2 rounded-md text-sm font-medium`,
                    pathname === '/login' ? tw`bg-gray-900 text-white` : tw`hover:bg-gray-700`,
                  ]}
                >
                  Login
                </Link>
                <Link
                  to='/components'
                  css={[
                    tw`text-gray-300  px-3 py-2 rounded-md text-sm font-medium`,
                    pathname === '/components' ? tw`bg-gray-900 text-white` : tw`hover:bg-gray-700`,
                  ]}
                >
                  Komponenten
                </Link>
              </div>
            </div>
          </div>
          <div tw='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <DropdownMenu items={notificationDropdownItems}>
              <button tw='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span tw='sr-only'>View notifications</span>

                <svg
                  tw='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
            </DropdownMenu>

            <div tw='ml-3 relative'>
              <DropdownMenu items={profileDropDownItems}>
                <button
                  tw='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  id='user-menu'
                  aria-haspopup='true'
                >
                  <span tw='sr-only'>Open user menu</span>
                  <img
                    tw='h-8 w-8 rounded-full'
                    src='https://randomuser.me/api/portraits/men/18.jpg'
                    alt=''
                  />
                </button>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <div css={[tw`sm:hidden`, !openMobileMenu && tw`hidden`]}>
        <div tw='px-2 pt-2 pb-3 space-y-1'>
          <Link
            to='/dashboard'
            css={[
              tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
              pathname === '/dashboard' ? tw`bg-gray-900` : tw`hover:bg-gray-700`,
            ]}
          >
            Dashboard
          </Link>
          <Link
            to='/register'
            css={[
              tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
              pathname === '/register' ? tw`bg-gray-900` : tw`hover:bg-gray-700`,
            ]}
          >
            Register
          </Link>
          <Link
            to='/login'
            css={[
              tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
              pathname === '/login' ? tw`bg-gray-900` : tw`hover:bg-gray-700`,
            ]}
          >
            Login
          </Link>
          <Link
            to='/test'
            css={[
              tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
              pathname === '/test' ? tw`bg-gray-900` : tw`hover:bg-gray-700`,
            ]}
          >
            Test
          </Link>
        </div>
      </div>
    </nav>
  )
}

const Logo = () => (
  <div>
    <Link to='/' tw='block lg:hidden h-8 w-auto flex'>
      <svg tw='h-full' viewBox='0 0 177 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M88.5 38.75C88.5 44.9632 83.4632 50 77.25 50H66V38.75C66 32.5368 71.0368 27.5 77.25 27.5C83.4632 27.5 88.5 32.5368 88.5 38.75Z'
          fill='#17CF97'
        />
        <path
          d='M88.5 61.25C88.5 55.0368 93.5368 50 99.75 50H111V61.25C111 67.4632 105.963 72.5 99.75 72.5C93.5368 72.5 88.5 67.4632 88.5 61.25Z'
          fill='#17CF97'
        />
        <path
          d='M66 61.25C66 67.4632 71.0368 72.5 77.25 72.5H88.5V61.25C88.5 55.0368 83.4632 50 77.25 50C71.0368 50 66 55.0368 66 61.25Z'
          fill='#17CF97'
        />
        <path
          d='M111 38.75C111 32.5368 105.963 27.5 99.75 27.5H88.5V38.75C88.5 44.9632 93.5368 50 99.75 50C105.963 50 111 44.9632 111 38.75Z'
          fill='#17CF97'
        />
      </svg>
    </Link>

    <Link to='/' tw='hidden lg:block h-8 w-auto'>
      <svg tw='h-full' viewBox='0 0 177 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M88.5 38.75C88.5 44.9632 83.4632 50 77.25 50H66V38.75C66 32.5368 71.0368 27.5 77.25 27.5C83.4632 27.5 88.5 32.5368 88.5 38.75Z'
          fill='#17CF97'
        />
        <path
          d='M88.5 61.25C88.5 55.0368 93.5368 50 99.75 50H111V61.25C111 67.4632 105.963 72.5 99.75 72.5C93.5368 72.5 88.5 67.4632 88.5 61.25Z'
          fill='#17CF97'
        />
        <path
          d='M66 61.25C66 67.4632 71.0368 72.5 77.25 72.5H88.5V61.25C88.5 55.0368 83.4632 50 77.25 50C71.0368 50 66 55.0368 66 61.25Z'
          fill='#17CF97'
        />
        <path
          d='M111 38.75C111 32.5368 105.963 27.5 99.75 27.5H88.5V38.75C88.5 44.9632 93.5368 50 99.75 50C105.963 50 111 44.9632 111 38.75Z'
          fill='#17CF97'
        />
      </svg>
    </Link>
  </div>
)

export default Navbar
