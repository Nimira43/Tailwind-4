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
    </>
    
  )
}

export default App

