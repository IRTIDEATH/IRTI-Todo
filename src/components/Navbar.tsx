import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ui/mode'

const Navbar = () => {
  return (
    <div className="bg-background space-x-12 px-5 py-3">
        <div className="flex items-center space-x-5">
          <h1 className="">Todo</h1>
          <div className="flex">
            <Link href="/about" className="">About</Link>
          </div>
          <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar