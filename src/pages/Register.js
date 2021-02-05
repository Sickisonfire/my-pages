import { useState } from 'react'
import { Validators } from '../lib/utilities/Validator'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { Button, InputField, Checkbox, Select } from '../components'

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

export const Register = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    tosCheck: false,
    country: '',
  })

  const { name, email, password, confirmPassword, tosCheck, country } = formData

  const handleClick = (e) => {
    e.preventDefault()
    alert('Clicked')
  }

  const handleChange = (key) => (value) => {
    setformData({ ...formData, [key]: value })
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Card>
        <H1>Sign Up</H1>

        <Form>
          <div>
            <InputField
              aria='username'
              icon='user'
              type='text'
              value={name}
              placeholder='Your Name'
              onChange={handleChange('name')}
              validators={[{ check: Validators.required, message: 'This field is required' }]}
            />
          </div>
          <div>
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
          </div>
          <div>
            <InputField
              aria='Password'
              icon='lock'
              type='password'
              value={password}
              placeholder='Password'
              onChange={handleChange('password')}
              validators={[{ check: Validators.required, message: 'This field is required' }]}
            />
          </div>
          <div>
            <InputField
              aria='Confirm Password'
              icon='lock'
              type='password'
              value={confirmPassword}
              placeholder='Repeat your password'
              onChange={handleChange('confirmPassword')}
              validators={[{ check: Validators.required, message: 'This field is required' }]}
            />
          </div>
          <div>
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
              value={country}
              placeholder='Select Country'
              onChange={handleChange('country')}
              icon='globe-americas'
            />
          </div>
          <div>
            <Checkbox
              label=' I agree all statements in'
              onChange={handleChange('tosCheck')}
              selected={tosCheck}
              link='/'
              linkDescription='Terms of service'
            />
          </div>
          <div tw='mx-auto mt-10'>
            <Button onClick={handleClick} value={'Register'} hasHover>
              Register
            </Button>
          </div>
        </Form>
        <p tw='mt-5 '>
          Already have an account?{' '}
          <Link to='/login' tw='underline'>
            Sign In
          </Link>
        </p>
      </Card>
    </>
  )
}

const Form = tw.form`m-auto flex flex-col`
const H1 = tw.h1`text-4xl mb-5 font-bold mb-10`
const Card = tw.div` m-10 bg-white p-10 rounded-xl shadow-lg md:(max-w-2xl mx-auto)`

export default Register
