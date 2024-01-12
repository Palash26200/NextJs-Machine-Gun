"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Laptop } from 'lucide-react'
import nav_links from "@/public/constants/nav_links";

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className='mb-8 border-b'>
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={'/'}>
            <h1 className="text-4xl font-bold">FinUn<span className='text-primary'>ityPro</span></h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {nav_links.map((link, idx) => (
                <div key={idx}>
                    {pathname === link.href ? (
                        <Link className='capitalize text-lg font-semibold text-primary' href={link.href}>
                            {link.name}
                        </Link>
                    ) : (
                        <Link className='capitalize text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary' href={link.href}>
                            {link.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
            <Button variant={'outline'} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
                <Laptop />
                <span className='hidden text-xs font-semibold text-gray-500 sm:block'>My Asset</span>
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
