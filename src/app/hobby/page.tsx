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
    <body>
        <ul style={{
            listStyleType: 'circle',
        }}>
            <li>저는 코딩을 좋아합니다</li>
            <li>저는 임플루드에서 활동을 하는 것을 좋아합니다</li>
            <li>저는 익스플루드에서 활동을 하는 것을 좋아합니다</li>
        </ul> 
      </body>
    </main>
  )
}
