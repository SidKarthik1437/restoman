import { motion } from 'framer-motion'
import { useState } from 'react'
import { variants, transitions } from '../../lib/anim'
import Link from 'next/link'

export default function Profile() {
  const [res_name, setRes_name] = useState('')
  const [res_add, setRes_add] = useState('')
  const [res_web, setRes_web] = useState('')
  const [res_type, setRes_type] = useState('')
  const [error, setError] = useState('')

  const isInvalid = res_name === '' || res_add === '' || res_type === ''

  const handleInput = async (event) => {
    event.preventDefault()

    if (!isInvalid) {
      try {
        //!TODO: add restaurant to database
      } catch (error) {
        setRes_name('')
        setRes_add('')
        setRes_web('')
        setRes_type('')
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
      className="z-20 flex h-screen w-full select-none flex-col items-center justify-between bg-background-body p-10 align-middle text-4xl"
    >
      <div className="mt-10">
        <span className="text-background-sidebar">
          We are gonna need more information about your restaurant
        </span>
        <form
          onSubmit={handleInput}
          method="POST"
          autoComplete="on"
          className="mt-10 grid grid-cols-2 justify-center gap-10 align-middle"
        >
          {error && <p className=" text-sm text-red">{error}</p>}
          <label className="select-none tracking-wide text-grey-res-head">
            Restaurant name
          </label>
          <input
            type="text"
            name="restaurantName"
            placeholder="restaurant"
            onChange={({ target }) => setRes_name(target.value)}
            value={res_name}
            className="pl-2 ml-10 h-10 w-80 select-none resize rounded-xl text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          />
          <label className="select-none tracking-wide text-grey-res-head">
            Address
          </label>
          <textarea
            type="text"
            name="address"
            placeholder="address"
            minlength="10"
            maxLength="300"
            aria-multiline
            onChange={({ target }) => setRes_add(target.value)}
            value={res_add}
            className="pl-2 ml-10 h-24 w-80 select-none resize rounded-xl text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          />
          <label className="select-none tracking-wide text-grey-res-head">
            Website
          </label>
          <input
            type="url"
            name="website"
            placeholder="website"
            onChange={({ target }) => setRes_web(target.value)}
            value={res_web}
            className="pl-2 ml-10 h-10 w-80 select-none rounded-xl text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
          />
          <label className="select-none tracking-wide text-grey-res-head">
            Restaurant type
          </label>
          <span className="ml-10 items-center justify-evenly align-middle">
            <label className="text-lg text-grey-res-head">Veg</label>
            <input
              type="radio"
              placeholder="Veg"
              value="Veg"
              name="rest-type"
              onChange={({ target }) => setRes_type(target.value)}
              className="mx-5 select-none rounded-full text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
            />
            <label className="text-lg text-grey-res-head">Non-Veg</label>
            <input
              type="radio"
              placeholder="Non-Veg"
              value="Non-Veg"
              name="rest-type"
              onChange={({ target }) => setRes_type(target.value)}
              className="ml-10 select-none rounded-full text-lg text-background-sidebar placeholder-opacity-50 shadow-neu-admin-input "
            />
          </span>
          <Link href={'/'}>
            <button
              type="button"
              // onClick={() => history.push("/signup/admin")}
              className="mx-10 h-10 w-40 rounded-xl bg-background-sidebar text-center text-xl text-blue-nav-full"
            >
              prev
            </button>
          </Link>
          <button
            type="submit"
            className="h-10 w-40 self-end rounded-xl bg-background-sidebar text-center text-xl text-blue-nav-full"
          >
            next
          </button>
        </form>
      </div>
    </motion.div>
  )
}
