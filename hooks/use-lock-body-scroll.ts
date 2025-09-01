import { useEffect } from 'react'

export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    if (lock) {
      // Get the current scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      
      // Store original values
      const originalBodyOverflow = document.body.style.overflow
      const originalBodyPaddingRight = document.body.style.paddingRight
      
      // Apply scroll lock with scrollbar compensation
      document.body.style.overflow = 'hidden'
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
      
      return () => {
        // Restore original values
        document.body.style.overflow = originalBodyOverflow || ''
        document.body.style.paddingRight = originalBodyPaddingRight || ''
      }
    } else {
      // Explicitly reset when lock is false
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [lock])
}
