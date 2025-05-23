import React from 'react'

const App = () => {
  return (
    <>
      
      <div className='container py-10 bg-grey-light'>
        <div className='bg-dark'>
          <h1 className='text-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
        <div className='bg-support-dark'>
          <h1 className='text-support-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
        <div className='bg-grey-dark'>
          <h1 className='text-grey-light-extra text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
        <div className='bg-support'>
          <h1 className='text-grey-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
        <div className='bg-prime'>
          <h1 className='text-gold text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
        <div className='bg-grey-medium'>
          <h1 className='text-sky text-2xl'>Vite - Tailwind - React Boilerplate </h1>
        </div>
      </div>

      <div className='bg-support-dark p-10 container'>
        <button className='bg-dark text-prime p-5 border-4 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-prime text-light p-5 border-4 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-grey-light text-support p-5 border-4 rounded cursor-pointer m-3'>Button</button>
      </div>

      <div className='bg-grey-dark p-10 container'>
        <button className='bg-dark text-gold p-5 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-prime text-light p-5 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-grey-light text-dark p-5 rounded cursor-pointer m-3'>Button</button>
      </div>

      <div className='container bg-support-light p-10'>
        <input
          type="text" placeholder='Name'
          className='block bg-dark text-prime py-2 px-3 border-0 outline-0 rounded-md mb-3' 
        />
        <input
          type="text" placeholder='Email'
          className='block bg-dark text-prime py-2 px-3 border-0 outline-0 rounded-md mb-3' 
        />
        <input
          type="text" placeholder='Password'
          className='block bg-dark text-prime py-2 px-3 border-0 outline-0 rounded-md mb-3' 
        />
      </div>

      <div className='container bg-grey-medium p-10'>
        <button className='bg-dark text-sky p-5 rounded cursor-pointer m-3 animate-pulse'>Button</button>
        <button className='bg-gold text-dark p-5 rounded cursor-pointer m-3 animate-bounce'>Button</button>
        <button className='bg-light text-support-dark p-5 rounded cursor-pointer m-3 animate-spin'>Button</button>
        <button className='bg-prime text-grey-dark p-5 rounded cursor-pointer m-3 animate-ping'>Button</button>
      </div>
    
    </>
  )
}

export default App

