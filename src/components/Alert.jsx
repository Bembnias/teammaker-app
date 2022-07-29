import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Alert = ({ alertMsg, alertType }) => {
  return (
    <AnimatePresence>
      <motion.div className="absolute right-6 p-4 mt-4 text-sm bg-primary-dark rounded-lg bg-opacity-80 z-50"
        key="alert"
        initial={{ y:"-100px", opacity: 0.3 }}
        animate={{ y:"16px", opacity: 1 }}
        exit={{ y:"-100px", opacity: 0.3 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ border: `2px solid ${alertType}`, color: `${alertType}` }}
      >
        <span className="font-medium">Alert:</span> { alertMsg }
      </motion.div> 
    </AnimatePresence>
  )
}





export default Alert