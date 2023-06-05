import { Link } from 'react-router-dom'
import { Helmet, SignInLayout, Button, Input, PasswordInput } from '~/components'

// Icons
import { FcGoogle } from 'react-icons/fc'
import { CiUser, CiLock } from 'react-icons/ci'

function Login() {
  return (
    <Helmet title='Sign in'>
      <SignInLayout>
        <section className='w-4/5 md:w-2/3 lg:w-1/2'>
          {/* Title */}
          <div>
            <h2 className='mb-2 text-3xl font-bold md:mb-4 lg:mb-6'>Welcome back!</h2>
            <span className='text-tertiary-color'>Never alone when you have a chat app!</span>
          </div>

          {/* Login Form */}
          <form action='' className='mt-8 flex flex-col gap-4 md:mt-12 lg:mt-16'>
            <Input name='username' id='username__input' placeholder='example123' icon={CiUser} />
            <PasswordInput name='password' id='password__input' placeholder='At least 8 characters' icon={CiLock} />
            <Button type='submit' color='info'>
              Log in
            </Button>
          </form>

          <div className='mb-8 mt-6'>
            <Button type='button' variant='outlined' color='info' startIcon={FcGoogle}>
              Login with Google
            </Button>
          </div>

          {/* Sign up Text */}
          <p className='text-center text-tertiary-color '>
            Don't you have an account?{' '}
            <Link to='/sign-up' className='text-blue-700 hover:underline'>
              Sign up
            </Link>
          </p>
        </section>
      </SignInLayout>
    </Helmet>
  )
}

export default Login
