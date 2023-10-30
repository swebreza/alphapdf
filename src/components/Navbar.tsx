import { Link } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-y-0 z-30 w-screen flex border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link className='  text-2xl font-bold text-zinc-700' href='/'>
            Alpha PDF
          </Link>
        </div>
        {/* TODO: Add mobile nav */}
        <div className='hidden items-center space-x-4  sm:flex'>
          <>
            <Link
              href='/pricing'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}
            >
              Pricing
            </Link>
          </>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
