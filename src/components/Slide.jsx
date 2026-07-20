export default function Slide({ title, text, imgSrc, imgAlt, active, lang }) {
  return (
    <div className={`slide${active ? ' active' : ''}`}>
      <h1>{title[lang]}</h1>
      <p>{text[lang]}</p>
      <img src={imgSrc} alt={imgAlt[lang]} />
    </div>
  )
}
