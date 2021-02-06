import React from 'react'
import { DropdownMenu, Button, Tooltip } from '../components'

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const items = [
  { link: '/register', text: 'register account' },
  { link: '/', text: 'visite Homepage' },
  { link: '/login', text: 'login' },
]

export const Komponenten = () => {
  return (
    <Tooltip bottom content='test'>
      <div tw=' pt-2 rounded bg-red-100 mx-auto flex space-x-5 p-4 items-center'>
        <div tw='mx-auto'>
          <Button isSmall onClick={() => null}>
            test
          </Button>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores laboriosam
          expedita, in itaque mollitia, deleniti consectetur quod molestiae, nam nisi optio culpa
          cum aspernatur quia corporis provident sequi iusto.
        </p>
      </div>
    </Tooltip>
  )
}

export default Komponenten
