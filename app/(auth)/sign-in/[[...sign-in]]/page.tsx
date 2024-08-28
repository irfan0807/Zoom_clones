import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='flex items-center h-screen w-full justify-center'>
      <SignIn />
    </main>
  )
}

export default SignInPage
