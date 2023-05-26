import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Login = () => {

    const [userError, setUserError] = useState(false)

    const [passwordError, setPasswordError] = useState(false)

    const navigate = useNavigate()

    const location = useLocation()

    const from = location?.state?.from?.pathname

    const { emailPasswordLogin, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordError(false)
        setUserError(false)

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        emailPasswordLogin(email, password)
            .then(() => {

                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {

                console.log(error.message);

                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setUserError('Invalid Email')
                    return
                }

                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setPasswordError('Ops! Wrong Password')
                    return
                }

            })
            
        setPasswordError(false)
        setUserError(false)
    }

    const handleGoogleSignin = () => {

        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignin = () => {

        githubSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <section className='login-section'>
            <form onSubmit={handleSubmit} className="login-container form-control w-full xl:w-[600px] flex flex-col gap-6 items-start">
                <div className="email-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="email-field">Email</label>
                    <input required className='input-field' type="email" name="email" id="email-field" placeholder='Your Email' />
                    {
                        userError && <p className='text-[#C6A87D]'>* {userError}</p>
                    }
                </div>
                <div className="password-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="password-field">Password</label>
                    <input required className='input-field' type="password" name="password" id="password-field" placeholder='Your Password' />
                    {
                        passwordError && <p className='text-[#C6A87D]'>* {passwordError}</p>
                    }
                </div>
                <div className="btn-grp w-full flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
                    <button className="btn login-btn" type='submit'>Login</button>
                    <button onClick={handleGoogleSignin} type='button' className="btn login-btn">Continue with Google</button>
                    <button onClick={handleGithubSignin} type='button' className="btn login-btn">continue with Github</button>
                </div>
                <div className="redirect">
                    <span className='text-white'>
                        New at Bong Bites? <Link state={{ from: from }} to="/register" className='text-[#C6A87D] hover:underline'>Register</Link>
                    </span>
                </div>
            </form>
        </section>
    );
};

export default Login;