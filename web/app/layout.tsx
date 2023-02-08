
import './globals.css'

function BrandName() {
  return (<div className="flex flex-wrap h-16 items-center justify-between">
    <div className="flex-shrink-0 items-center grid grid-flow-col auto-cols-max">
      <div className='text-2xl font-medium text-amber-600'>
        Just a blog
      </div>
      <div className='text-sm font-medium mx-4'>
        -
      </div>
      <div className='text-sm font-medium'>
        a simple web blog using NextJS and Strapi
      </div>
    </div>
  </div>)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <head />
      <body className='antialiased text-gray-800 dark:bg-black dark:text-gray-400'>
        <header className="min-h-full sticky top-0 z-10 dark:bg-black">
          <div className="container px-8 py-2 mx-auto xl:px-5 max-w-screen-lg">
            <div className="flex flex-wrap h-16 items-center justify-between">
              <BrandName />
              <div className="flex items-center">
                <div className="sm:ml-0 sm:mt-4 ml-10 flex items-baseline space-x-4">

                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="min-h-full dark:bg-black">
          <div className="container px-8 py-2 mx-auto xl:px-5 max-w-screen-lg">
            <BrandName />
          </div>
        </footer>
      </body>
    </html>
  )
}
