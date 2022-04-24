import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { variants, transitions } from '../../lib/anim'
import Link from 'next/link'

export default function AdminEAP() {
  const [role, setRole] = useState('ADMIN')
  const [admin_name, setAdmin_Name] = useState('')
  const [admin_email, setAdmin_Email] = useState('')
  const [admin_password1, setAdmin_Password1] = useState('')
  const [admin_password2, setAdmin_Password2] = useState('')
  const [error, setError] = useState('')

  const isInvalid =
    admin_password1 === '' || admin_password2 === '' || admin_email === ''

  useEffect(() => {
    document.title = 'SignUp - RestoMan'
  })

  const handleSignUp = async (event) => {
    ''
    event.preventDefault()

    if (admin_password1 === admin_password2) {
      try {
        const createdUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(admin_email, admin_password2)
        await createdUser.user.updateProfile({
          displayName: admin_name,
        })

        // !TODO: add user to database

        // history.push(Routes.SIGNUP_PROFILE)
      } catch (error) {
        setAdmin_Name('')
        setAdmin_Email('')
        setAdmin_Password1('')
        setAdmin_Password2('')
        setError(error.message)
      }
    } else {
      setError('Passwords Do not match!')
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
      className="flex h-screen w-full select-none items-center justify-center bg-background-body align-middle text-4xl"
    >
      <span>
        I’m hoping you are the admin!
        <br />
        What’s your name? and your email ID.
        <br />
        Also, create a new password
      </span>
      <form
        onSubmit={handleSignUp}
        method="POST"
        autoComplete="on"
        className="mt-5 ml-20 flex h-screen flex-col items-center justify-evenly "
      >
        {error && <p className=" text-sm text-red">{error}</p>}
        <input
          type="text"
          placeholder="name"
          name="name"
          className="h-10 w-80 select-none rounded-xl pl-2 text-lg text-background-sidebar   placeholder-opacity-50 shadow-neu-admin-input "
          onChange={({ target }) => setAdmin_Name(target.value)}
          value={admin_name}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="h-10 w-80 select-none rounded-xl pl-2 text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          onChange={({ target }) => setAdmin_Email(target.value)}
          value={admin_email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="h-10 w-80 select-none rounded-xl pl-2 text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          onChange={({ target }) => setAdmin_Password1(target.value)}
          value={admin_password1}
          // autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="retype-password"
          name="password"
          className="h-10 w-80 select-none rounded-xl pl-2 text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          onChange={({ target }) => setAdmin_Password2(target.value)}
          value={admin_password2}
          // autoComplete="new-password"
        />
        <div>
          <Link href={'/signup/hello'}>
            <button
              type="button"
              // onClick={() => history.push("/signup/hello")}
              className="mx-10 h-10 w-40 rounded-xl bg-background-sidebar pl-2 text-center text-xl text-blue-nav-full"
            >
              prev
            </button>
          </Link>
          <button
            type="button"
            disabled={isInvalid}
            className={`mx-10 h-10 w-40 rounded-xl bg-background-sidebar text-center text-xl text-blue-nav-full ${
              isInvalid && `opacity-50`
            }`}
            onClick={handleSignUp}
          >
            next
          </button>
        </div>
      </form>
    </motion.div>
  )
}
