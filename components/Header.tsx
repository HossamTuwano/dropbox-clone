'use client'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Moon, Sun } from 'lucide-react'

import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
function Header() {
  const { setTheme } = useTheme()

  return (
    <div className='flex justify-between items center'>
      <div className='flex items-center gap-2'>
        <div className=' bg-blue-600 '>
          <Image
            alt='logo'
            src='https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png'
            width={50}
            height={50}
            className='invert'
          />
        </div>
        <div className='font-bold text-2xl capitalize'>dropbox</div>
      </div>
      <div className='flex gap-6 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserButton afterSignOutUrl='/' />

        <SignedOut>
          <SignInButton afterSignInUrl='/dashboard' mode='modal' />
        </SignedOut>

        <Menu />
      </div>
    </div>
  )
}

export default Header
