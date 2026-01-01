"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SplashScreen() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  borderRadius: ["50% 50%", "20% 80%", "50% 50%"],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  borderRadius: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="w-16 h-16 border-4 border-t-orange-500 border-r-transparent border-b-orange-500 border-l-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
