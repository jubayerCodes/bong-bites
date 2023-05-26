import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from

    const { emailPasswordSignUp, updateNameAndPhoto, updates, setUpdates, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setPasswordError(true)
            return
        }

        emailPasswordSignUp(email, password)
            .then(res => {
                const user = res.user

                updateNameAndPhoto(user, name, photo)
                    .then(() => {

                        setUpdates(!updates)
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                console.log(error.message);

                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setEmailError('Email Already Exist')
                }

                return
            })

        setEmailError(false)
        setPasswordError(false)
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
        <section className='register-section'>
            <form onSubmit={handleSubmit} className="register-container form-control w-full xl:w-[600px] flex flex-col gap-6 items-start">
                <div className="name-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="name-field">Name</label>
                    <input required className='input-field' type="name" name="name" id="name-field" placeholder='Full Name' />
                </div>
                <div className="photo-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="photo-field">Photo</label>
                    <input required className='input-field' type="photo" name="photo" id="photo-field" placeholder='Photo URL' />
                </div>
                <div className="email-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="email-field">Email</label>
                    <input required className='input-field' type="email" name="email" id="email-field" placeholder='Your Email' />
                    {
                        emailError && <p className='text-[#C6A87D]'>* {emailError}</p>
                    }
                </div>
                <div className="password-grp text-white flex flex-col items-start gap-2 w-full">
                    <label htmlFor="password-field">Password</label>
                    <input required className='input-field' type="password" name="password" id="password-field" placeholder='Your Password' />
                    {
                        passwordError && <p className='text-[#C6A87D]'>* Password should have at least 6 characters</p>
                    }
                </div>
                <div className="btn-grp w-full flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
                    <button className="btn register-btn" type='submit'>Register</button>
                    <button onClick={handleGoogleSignin} type='button' className="btn register-btn">Continue With Google</button>
                    <button onClick={handleGithubSignin} type='button' className="btn register-btn">Continue With Github</button>
                </div>
                <div className="redirect">
                    <span className='text-white'>
                        Already Registered? <Link to="/login" className='text-[#C6A87D] hover:underline'>Login</Link>
                    </span>
                </div>
            </form>
        </section>
    );
};

export default Register;