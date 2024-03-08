import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
	return (
		<div className='flex flex-col gap-8'>
			<img src='/img/logo/KIT-logo.png' className='self-center' />
			<SignInForm disableSubmit={false} />
		</div>
	)
}

export default SignIn