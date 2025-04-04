'use client'

import React from 'react'

export const SWProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   React.useEffect(() => {
      if ('serviceWorker' in navigator) {
         navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
               console.log('Service Worker registered with scope:', registration.scope)
            })
            .catch(error => {
               console.error('Service Worker registration failed:', error)
            })
      }
   }, [])
   return children
}

