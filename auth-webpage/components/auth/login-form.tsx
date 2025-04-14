import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'

function LoginForm() {
  return (
    <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don´t have an an account?"
        backButtonHref="/auth/register"
        showSocial
    >
        Login Form
    </CardWrapper>
  )
}

export default LoginForm
