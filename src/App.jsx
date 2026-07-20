import { useState } from 'react'
import Presentation from './components/Presentation.jsx'

export default function App() {
  const [current, setCurrent] = useState(0)
  const total = 4

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  return (
    <>
      <Presentation current={current} />
      <div className="nav">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}
