import React from 'react'

const App = () => {
  return (
    <>
      <div className='bg-dark container'>
        <h1 className='text-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
      </div>
      <div className='bg-support-dark container'>
        <h1 className='text-support-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
      </div>
      <div className='bg-grey-dark container'>
        <h1 className='text-grey-light-extra text-2xl'>Vite - Tailwind - React Boilerplate </h1>
      </div>
      <div className='bg-support container'>
        <h1 className='text-grey-light text-2xl'>Vite - Tailwind - React Boilerplate </h1>
      </div>
      <div className='bg-prime container'>
        <h1 className='text-gold text-2xl'>Vite - Tailwind - React Boilerplate </h1>
      </div>
      <div className='bg-support-dark p-20'>
        <button className='bg-dark text-prime p-5 border-4 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-prime text-light p-5 border-4 rounded cursor-pointer m-3'>Button</button>
        <button className='bg-grey-light text-support p-5 border-4 rounded cursor-pointer m-3'>Button</button>
      </div>
    </>
    
  )
}

export default App

