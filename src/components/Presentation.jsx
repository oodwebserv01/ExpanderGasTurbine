import Slide from './Slide.jsx'

const slidesData = [
  {
    title: 'Gas Turbine Engines',
    text: 'An introduction to turbine engines used in power generation and aviation',
    imgSrc: 'images/gas_turbine_overview.jpg',
    imgAlt: 'Gas Turbine Overview',
  },
  {
    title: 'Basic Components',
    text: 'Compressor, Combustor, and Turbine',
    imgSrc: 'images/gas_turbine_components.jpg',
    imgAlt: 'Gas Turbine Components',
  },
  {
    title: 'Working Principle',
    text: 'Air is compressed, mixed with fuel, ignited, and expands through the turbine',
    imgSrc: 'images/gas_turbine_cycle.jpg',
    imgAlt: 'Gas Turbine Cycle',
  },
  {
    title: 'Applications',
    text: 'Aircraft propulsion, power plants, and marine propulsion',
    imgSrc: 'images/gas_turbine_application.jpg',
    imgAlt: 'Gas Turbine Application',
  },
]

export default function Presentation({ current }) {
  return (
    <>
      {slidesData.map((s, i) => (
        <Slide key={i} {...s} active={i === current} />
      ))}
    </>
  )
}
