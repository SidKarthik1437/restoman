export const variants = {
  initial: {
    opacity: 0,
    x: '100vw',
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '-100vw',
    scale: 0,
  },
}

export const transitions = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 1,
}
