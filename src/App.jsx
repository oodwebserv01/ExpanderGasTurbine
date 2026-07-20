import { useState } from 'react'
import Presentation, { slidesData } from './components/Presentation.jsx'

export default function App() {
  const [current, setCurrent] = useState(0)
  const total = slidesData.length

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  return (
    <>
      <Presentation current={current} />
      <div className="nav">
        <button onClick={prev}>ก่อนหน้า</button>
        <button onClick={next}>ถัดไป</button>
      </div>
    </>
  )
}
