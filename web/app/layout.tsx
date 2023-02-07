
import './globals.css'
import { classNames } from '@/utils/utils'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: true }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='antialiased text-gray-800 dark:bg-black dark:text-gray-400'>
        <div className="min-h-full sticky top-0 z-10 dark:bg-black">
          <div className="container px-8 py-2 mx-auto xl:px-5 max-w-screen-lg">
            <div className="flex flex-wrap h-16 items-center justify-between">
              <div className="flex-shrink-0 items-center grid grid-flow-col auto-cols-max">
                <img
                  className="h-8 w-8 pr-4"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <div className='text-2xl font-medium'>
                  Just a blog
                </div>
                <div className='text-sm font-medium mx-4'>
                  -
                </div>
                <div className='text-sm font-medium'>
                  a simple web blog using NextJS and Strapi
                </div>
              </div>
              <div className="flex items-center">
                <div className="">
                  <div className="sm:ml-0 sm:mt-4 ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
