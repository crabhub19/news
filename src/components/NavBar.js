import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import creator from './creator.png'
const navigation = [
  { name: 'sports', to: '/news/sports', current: window.location.pathname==="/news/sports"?true:false },
  { name: 'technology', to: '/news/technology', current: window.location.pathname==="/news/technology"?true:false },
  { name: 'science', to: '/news/science', current: window.location.pathname==="/news/science"?true:false },
  { name: 'health', to: '/news/health', current: window.location.pathname==="/news/health"?true:false },
  { name: 'entertainment', to: '/news/entertainment', current: window.location.pathname==="/news/entertainment"?true:false },
  { name: 'general', to: '/news/general', current: window.location.pathname==="/news/general"?true:false },
  { name: 'business', to: '/news/business', current: window.location.pathname==="/news/business"?true:false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
  return (
    <Disclosure as="nav" className="bg-white navbar dark:bg-gray-900 dark:text-black fixed min-w-full z-20">
      <div className="mx-auto max-w-7xl px-2 lg:px-6 xl:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 dark:bg-gray-500 text-white' : 'text-black hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
 


          <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            {/* darkmod button */}
            <button id='sun' onClick={props.toggleTheme} type="button" className="relative rounded-full bg-slate-300 p-1 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-slate-600 dark:bg-gray-800  dark:text-gray-400 dark:hover:text-white  dark:focus:ring-white dark:focus:ring-offset-gray-800 m-3 "
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 sun-icon`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 moon-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            </button>




            {/* notification button */}
            <button
              type="button"
              className="relative rounded-full bg-slate-300 p-1 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-slate-600 dark:bg-gray-800  dark:text-gray-400 dark:hover:text-white  dark:focus:ring-white dark:focus:ring-offset-gray-800 "
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={creator}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              as="a"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white dark:bg-gray-500' : 'text-white hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-200 dark:hover:text-black',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
