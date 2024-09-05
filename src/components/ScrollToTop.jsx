import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleVisibility = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 200;
        // const documentHeight = document.documentElement.scrollHeight;
        // const scrollThreshold = documentHeight * 0.1;

        if (scrollPosition > scrollThreshold) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

  return (
    <div>
        {isVisible && (
            <button onClick={scrollToTop} className='bg-slate-500 text-blue p-3 fixed bottom-4 right-4'>↑</button>
        )}
    </div>
  )
}

export default ScrollToTop