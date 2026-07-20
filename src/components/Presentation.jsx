import Slide from './Slide.jsx'

export const slidesData = [
  {
    title: 'เครื่องยนต์เทอร์ไบน์ก๊าซ (Gas Turbine)',
    text: 'บทนำสู่เครื่องยนต์เทอร์ไบน์ที่ใช้ในงานผลิตไฟฟ้า และการบิน',
    imgSrc: 'images/BladeDesign01.jpg',
    imgAlt: 'ใบพัดเทอร์ไบน์',
  },
  {
    title: 'แนวคิดพื้นฐาน',
    text: 'อากาศถูกอัดตัว เผาไหม้ และขยายตัวเพื่อสร้างกำลัง',
    imgSrc: 'images/concept.gif',
    imgAlt: 'แนวคิดการทำงานของเทอร์ไบน์',
  },
  {
    title: 'ส่วนประกอบหลัก',
    text: 'คอมเพรสเซอร์ ห้องเผาไหม้ และเทอร์ไบน์',
    imgSrc: 'images/BladeDesign02.png',
    imgAlt: 'การออกแบบใบพัด',
  },
  {
    title: 'ปั๊มและการประกอบ',
    text: 'ระบบปั๊มน้ำมันและการประกอบชิ้นส่วน',
    imgSrc: 'images/pump.gif',
    imgAlt: 'ปั๊ม',
  },
  {
    title: 'การประกอบปั๊ม',
    text: 'ขั้นตอนการประกอบชุดปั๊มเข้ากับระบบ',
    imgSrc: 'images/pumpassembky.gif',
    imgAlt: 'การประกอบปั๊ม',
  },
  {
    title: 'วาล์วและห้องเผา',
    text: 'วาล์วควบคุมการไหล และห้องเผาไหม้',
    imgSrc: 'images/valve01.gif',
    imgAlt: 'วาล์ว',
  },
  {
    title: 'ห้องเผาและวาล์ว',
    text: 'การทำงานร่วมกันของห้องเผาและวาล์ว',
    imgSrc: 'images/chambervalve.gif',
    imgAlt: 'ห้องเผาและวาล์ว',
  },
  {
    title: 'การประกอบทั้งชุด',
    text: 'การประกอบชิ้นส่วนทั้งหมดเป็นเครื่องยนต์เทอร์ไบน์',
    imgSrc: 'images/assembly01.gif',
    imgAlt: 'การประกอบเครื่องยนต์',
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
