import { useState } from 'react'
import Presentation, { slidesData } from './components/Presentation.jsx'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [lang, setLang] = useState('th')
  const total = slidesData.length

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const toggleLang = () => setLang((l) => (l === 'th' ? 'en' : 'th'))

  return (
    <>
      <Presentation current={current} lang={lang} />
      <div className="nav">
        <button onClick={prev}>ก่อนหน้า</button>
        <button onClick={toggleLang}>{lang === 'th' ? 'English' : 'ไทย'}</button>
        <button onClick={next}>ถัดไป</button>
      </div>
    </>
  )
}
