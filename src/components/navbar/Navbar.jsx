import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "sidharthpatro010@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'sidharthpatro010@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar