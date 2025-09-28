import Link from 'next/link';
import React from 'react'
import { Route } from '../types/route';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button
        className='hover:bg-yellow-400 transition-colors transform duration-300  px-10 py-4 bg-yellow-300 text-white w-full md:w-auto'
        {...rest}
    >
        {children ? children : <Link href={`${Route.CONTACT}`}>Contact Us</Link>}
        
    </button>
  )
}

export default Button;
