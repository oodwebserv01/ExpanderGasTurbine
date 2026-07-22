import { useState } from 'react'
import Presentation, { slidesData } from './components/Presentation.jsx'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [lang, setLang] = useState('th')
  const total = slidesData.length

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const toggleLang = () => setLang((l) => (l === 'th' ? 'en' : 'th'))

  const downloadText = {
    th: 'ขอสารภาพตรงนี้ว่า ผมลืมสร้างรูสำหรับ หัวเทียน หัวฉีดแก้ส และรูน๊อตทั้งหลายที่เป็นเกลียว อย่างไรก็ดี หากผมจะทำไว้ รูพวกนี้คุณก็ต้องเอาไปทำใหม่อยู่ดี เพราะมันเป็นสิ่งที่ต้องพอดีสนิดแนบแน่นกับของเหล่านั้น',
    en: 'To be honest here, I forgot to create holes for the spark plug, fuel injector, and all the threaded nut holes. However, even if I were to add them, you would still need to redo them because these are things that must fit precisely and snugly with those components.'
  }

  const modelUrl = '/Model_ExpanderGasTurbineEngine.obj'

  return (
    <>
      <Presentation current={current} lang={lang} />
      <div className="nav">
        <div className="nav-left">
          <a
            href={modelUrl}
            download="Model_ExpanderGasTurbineEngine.obj"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{lang === 'th' ? 'ดาวน์โหลดโมเดล 3D' : 'Download 3D Model'}</span>
          </a>
          <p className="download-desc">{downloadText[lang]}</p>
        </div>
        <div className="nav-right">
          <button onClick={prev}>&lt;&lt;</button>
          <button onClick={toggleLang}>{lang === 'th' ? 'English' : 'ไทย'}</button>
          <button onClick={next}>&gt;&gt;</button>
          <div className="license-notice">
            {lang === 'th' ? (
              'แบบแปลนและแนวคิดทั้งหมดในเว็บไซต์นี้ ถูกเผยแพร่เป็นสาธารณสมบัติภายใต้สัญญาอนุญาต CC0 1.0 ทุกคนสามารถนำไปศึกษา ดัดแปลง หรือใช้งานต่อได้โดยอิสระ'
            ) : (
              'All designs and concepts on this website are released into the public domain under the CC0 1.0 license. Anyone is free to study, modify, and use them for any purpose.'
            )}
          </div>            
        </div>
      </div>
    </>
  )
}