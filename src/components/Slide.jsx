export default function Slide({ title, text, imgSrc, imgAlt, active, lang }) {
  return (
    <div className={`slide${active ? ' active' : ''}`}>
      <div className="slide-content">
        <div className="text-pane">
          <h1>{title[lang]}</h1>
          <p>{text[lang]}</p>
        </div>
        <div className="image-pane">
          <img src={imgSrc} alt={imgAlt[lang]} />
        </div>
      </div>
    </div>
  )
}
