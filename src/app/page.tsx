'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);

  const textStyle = {
    fontSize: '72px',
    fontWeight: '900px',
    color: 'magenta'
  };

  return (
    <main>
      <span
        style={textStyle}
      >
        The count is {count}!
      </span>
      <br />
      <button 
        type='button' 
        onClick={() => {
          setCount((prev) => ++prev)
        }}
        style={{
          border: 'none',
          borderRadius: '8px',
          padding: '8px 14px',
          backgroundColor: 'magenta',
          color: 'white',
        }}
      >
        Click me!
      </button>
    </main>
  )
}
