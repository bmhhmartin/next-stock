'use client'
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useState } from 'react';

export default function RootLayout({ children }) {

  const [mode, setMode] = useState(true);

  const themeChange =()=>{
    setMode(prev => !prev);
  }


  return (
    <html className={mode == true ? 'dark' : 'light'}>
      <body className='relative h-screen'>
          <div className="form-control w-full dark:bg-blue-900 z-10 absolute bottom-0 left-0 right-0 px-4">
            <label className="cursor-pointer label">
              <span className="label-text text-white">Change Theme</span> 
              <input type="checkbox" className="toggle toggle-primary" onChange={themeChange} />
            </label>
          </div>
          {children}
          <ProgressBar
            height="4px"
            color="#F11F1F"
            options={{ showSpinner: false }}
            shallowRouting
          />
      </body>
    </html>
  )
}
