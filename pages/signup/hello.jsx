import { AnimatePresence, motion } from 'framer-motion'
import { variants, transitions } from '../../lib/anim'
import Link from 'next/link'

export default function Hello() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
      className="bg-background-body z-0 flex h-screen w-full items-center justify-center align-middle text-4xl"
    >
      👋Hello there,
      <Link href="/signup/admin">
        <button
          type="button"
          //   onClick={() => history.push('/signup/admin')}
          className="text-blue-nav-full bg-background-sidebar h-10 w-40 rounded-xl text-center text-xl"
        >
          next
        </button>
      </Link>
    </motion.div>
  )
}
