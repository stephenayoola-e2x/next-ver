import React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8" data-test="mock-header-class" >
      <Link href="/" >
        <a className="hover:underline" data-test="mock-header"  >Blog</a>
      </Link>
      .
    </h2>
  )
}
