export default function Slide({ title, text, imgSrc, imgAlt, active }) {
  return (
    <div className={`slide${active ? ' active' : ''}`}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}
