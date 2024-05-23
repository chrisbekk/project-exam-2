import { duration } from '@mui/material';
import { motion } from 'framer-motion';
export default function EditProfile({ children, setToggleEditProfile }) {
  const variants = {
    initial: { y: '-300%' },
    show: { y: '-30%', transition: { delay: 0.15 } },
    exit: { y: '300%', transition: { delay: 0.25 } },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="show"
      exit="exit"
      className="z-50 h-full w-full rounded-2xl border border-neutral-950 bg-neutral-50 bg-opacity-80"
    >
      {/* <button onClick={() => setToggleEditProfile(false)}>Close</button> */}
      {children}
    </motion.div>
  );
}
