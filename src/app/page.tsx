'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState(0);

  const textStyle = {
    fontSize: '72px',
    fontWeight: '900px',
    color: 'magenta'
  };

  return (
    <main>
    <h1>1학년 3반 23번 314호 호실장 남자 임호선입니다!</h1>
    <br/><br/><br/>
    <h3>이번에 임플루드에 운이 좋게 들어오게 되었는데,<br/>저는 앞으로 임플루드에서 최선을 다해서 활동을 하도록 하겠습니다!</h3>
    <h3>제 생일은 2007년 11월 18일입니다!</h3>
    

    <hr />

    <h4>제가 좋아하는 것들을 보고 싶다면 아래를 클릭해주세요</h4>
    <Link href="/hobby">좋아하는 것들로 가기</Link>

    <hr />

    
    <h3>간단한 퀴즈입니다.</h3>
    <form>
      <a>제 이름은 무었일까요?</a>
      <br />
      <input type="text" />
      <br />
      <a>제 반은 무었일까요?</a>
      <br />
      <input type="radio" id="1반" value="1반"name="class" />
      <input type="radio" id="2반" value="2반"name="class" />
      <input type="radio" id="3반" value="3반"name="class" />
      <input type="radio" id="4반" value="4반"name="class" />
      <input type="radio" id="5반" value="5반"name="class" />
      <input type="radio" id="6반" value="6반"name="class" />
      <br />
      <a>제 성별은 무었일까요?</a>
      <br />
      <select>
        <option>남</option>
        <option>여</option>
      </select>
      <br />
      <a>하고 싶은 말</a>
      <br />
      <textarea></textarea>
      <br />
      <a>제출이 안되기는 하는데</a>
      <br />
      <button type="submit">제출</button>
    </form>
    
    <br/>
    </main>
  )
}
