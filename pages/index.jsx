import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const App = () => {
  const [userName, setUserName] = useState('')
  const router = useRouter()
  return (
    <div>
      <label>
        username
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <p>{userName}깃허브 검색하기</p>
      <Link href={`users/${userName}`}>검색하기</Link>
    </div>
  )
}

export default App
