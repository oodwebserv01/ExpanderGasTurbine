export default function Slide({ title, text, imgSrc, imgAlt, active, lang, isConclusion, AdvantagesDropdown }) {
  return (
    <div className={`slide${active ? ' active' : ''}${isConclusion ? ' conclusion' : ''}`}>
      <div className="slide-content">
        <div className="image-pane">
          <img src={imgSrc} alt={imgAlt[lang]} />
        </div>
        <div className="text-pane">
          <p>{text[lang]}</p>
          {AdvantagesDropdown && <AdvantagesDropdown lang={lang} />}
        </div>
      </div>
    </div>
  )
}

