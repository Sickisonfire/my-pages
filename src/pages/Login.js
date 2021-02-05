import { useState } from 'react'
import { Validators } from '../lib/utilities/Validator'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button, InputField } from '../components'

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

export const Login = () => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
        <title>Login</title>
      </Helmet>
      <Card>
        <H1>Login</H1>

        <Form>
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

          <div tw='mx-auto mt-10'>
            <Button onClick={handleClick} value={'Register'} hasHover>
              Register
            </Button>
          </div>
        </Form>
        <p tw='mt-5 '>
          Create an account{' '}
          <Link to='/register' tw='underline'>
            Sign up
          </Link>
        </p>
      </Card>
    </>
  )
}

const Form = tw.form`m-auto flex flex-col`
const H1 = tw.h1`text-4xl mb-5 font-bold mb-10`
const Card = tw.div` m-10 bg-white p-10 rounded-xl shadow-lg md:(max-w-2xl mx-auto)`

export default Login
