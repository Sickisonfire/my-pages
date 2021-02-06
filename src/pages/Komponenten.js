import React, { useState, useContext } from 'react'
import { DropdownMenu, Button, Tooltip, InputField, Checkbox, Select } from '../components'
import { Validators } from '../lib/utilities/Validator'
import { AlertContext } from '../contexts'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const notificationDropdownItems = [
  { link: '/components', text: 'Punkt 1' },
  { link: '/components', text: 'Punkt 2' },
  { link: '/components', text: 'Punkt 3' },
]

export const Komponenten = () => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const alertContext = useContext(AlertContext)
  const handleClick = (e) => {
    e.preventDefault()
    alertContext.setAlert('Popup für Warnungen', 'WARN')
  }

  const handleChange = (key) => (value) => {
    setformData({ ...formData, [key]: value })
  }
  const { email, password } = formData

  return (
    <div tw='container mx-auto p-20  w-full'>
      <div tw='mb-16 '>
        <h2 tw='text-2xl font-bold mb-8'>Buttons</h2>
        <div tw='flex space-x-2 items-center'>
          <Button onClick={() => null}>primary</Button>
          <Button onClick={() => null} isSecondary>
            secondary
          </Button>
          <Button onClick={() => null} isSmall>
            small
          </Button>
          <Button onClick={() => null} isSecondary isSmall>
            small
          </Button>
        </div>
      </div>
      <div tw='mb-20 '>
        <h2 tw='text-2xl font-bold mb-8'>Inputfelder</h2>
        <div tw='flex space-x-2 items-center '>
          <InputField
            aria='Email'
            icon='envelope'
            type='email'
            value={email}
            placeholder='Your Email'
            onChange={handleChange('email')}
            validators={[
              { check: Validators.required, message: 'This field is required' },
              { check: Validators.email, message: 'Please enter a valid email address' },
            ]}
          />
          <InputField
            aria='Password'
            type='password'
            value={password}
            placeholder='Password'
            onChange={handleChange('password')}
            validators={[{ check: Validators.required, message: 'This field is required' }]}
          />
          <InputField aria='Password' type='textarea' onChange={() => null} />
          <Select
            aria='Select Country'
            data={[
              { value: 1, label: 'India' },
              { value: 2, label: 'USA' },
              { value: 3, label: 'UK' },
              { value: 4, label: 'Germany' },
              { value: 5, label: 'Russia' },
              { value: 6, label: 'Italy' },
            ]}
            placeholder='Select Country'
            onChange={() => null}
            icon='globe-americas'
          />
          <Checkbox label='' onChange={() => null} />
        </div>
      </div>
      <div tw='mb-20 '>
        <h2 tw='text-2xl font-bold mb-8'>Tooltips</h2>
        <div tw='flex space-x-2 items-center pl-20'>
          <Tooltip bottom content='unten'>
            <Tooltip top content='oben'>
              <Tooltip left content='links'>
                <Tooltip right content='rechts'>
                  <Button>hover für Tooltips</Button>
                </Tooltip>
              </Tooltip>
            </Tooltip>
          </Tooltip>
        </div>
      </div>
      <div tw='mb-20 '>
        <h2 tw='text-2xl font-bold mb-8'>Popups</h2>
        <div tw='flex space-x-2 items-center pl-20'>
          <Button onClick={() => alertContext.setAlert('Popup für Warnungen', 'WARN')}>
            Klicken für Popup
          </Button>
          <Button onClick={() => alertContext.setAlert('Popup für Erfolg', 'SUCCESS')}>
            Klicken für Popup
          </Button>
          <Button onClick={() => alertContext.setAlert('Popup für Fehler', 'ERROR')}>
            Klicken für Popup
          </Button>
          <Button onClick={() => alertContext.setAlert('Popup für Information', 'INFO')}>
            Klicken für Popup
          </Button>
        </div>
      </div>
      <div tw='mb-20 '>
        <h2 tw='text-2xl font-bold mb-8'>Popups</h2>
        <div tw='flex space-x-2 items-center pl-20'>
          <DropdownMenu items={notificationDropdownItems}>
            <Button isSmall>Klicken für Dropdown</Button>
          </DropdownMenu>
          <DropdownMenu items={notificationDropdownItems}>
            <p tw='font-bold'>Klicken für Dropdown</p>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Komponenten
