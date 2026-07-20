import Slide from './Slide.jsx'

export const slidesData = [
  {
    title: { th: '1. โครงสร้างของเทอร์ไบน์', en: '1. Turbine Structure' },
    text: {
      th: 'ภายในตัวเรือนเทอร์ไบน์จะมีจานเกียร์ 2 ชุด หันหน้าประกบติดกัน แต่ละจานเกียร์ต่อกับใบพัดเป็นชิ้นเดียว และตั้งฉากกับจานเกียร์ กำลังจะถูกส่งจากขอบจานเกียร์ไปยังเพลาขับคู่ที่วางขนานอยู่ฝั่งตรงข้าม',
      en: 'Inside the turbine housing there are two gear discs facing each other. Each disc is integrated with a blade and perpendicular to the disc. Power is transmitted from the disc edge to a pair of parallel drive shafts on the opposite side.'
    },
    imgSrc: 'images/assembly01.gif',
    imgAlt: { th: 'การประกอบเครื่องยนต์', en: 'Engine assembly' },
  },
  {
    title: { th: '2. หลักการทำงานของเทอร์ไบน์', en: '2. Turbine Working Principle' },
    text: {
      th: 'ใบมีด 2 ใบเป็นรูปครึ่งวงกลม วางเยื้องจุดศูนย์กลางการหมุนห่างกันพอดี เพื่อสร้างห้องอัดแรงดันที่ขยายตัวได้เมื่อใบมีดหมุน แรงดันไอร้อนจึงถูกแปลงเป็นพลังงานกล ข้อดีสำคัญ: 1. ไอร้อนไหลออกที่แรงดันต่ำโดยไม่ผ่านวาล์ว จึงดึงพลังงานออกได้เกือบเต็มที่ 2. ใบมีดเลื่อนไถลบนผิวกันเองและถูกแรงดันผลักแยก จึงแทบไม่มีแรงเสียดทาน 3. เคลื่อที่แบบหมุนรอบจุดศูนย์กลาง สั่นสะเทือนน้อย 4. ไอร้อนแทบไม่ไหลตามแกนหมุน เสียพลังงานน้อย 5. ใบมีดสมมาตร 180 องศา หักล้างแรงสั่นสะเทือนกันเองได้ดี 6. เคลื่อนที่สม่ำเสมอ วัสดุรับแรงน้อย ความเร็วรอบสูงได้ขึ้นอยู่กับแบริ่งและวัสดุ จึงให้แรงม้าได้สูงมากตามความเร็วรอบ 7. ขนาดเล็กชิ้นส่วนน้อย เฮ้าส์ซิ่งมีขนาดใหญ่กว่าตัวใบมีดเพียงเล็กน้อย จึงทำให้มีน้ำหนักเบาและต้นทุนต่ำ 8. ไม่มีการชิงจุดระเบิดก่อนเวลา เพราะแยกห้องเผาไหม้ออกจากกังหันโดยสิ้นเชิง 9. กังหันมีเวลาสัมผัสไอร้อนเพียงครึ่งรอบ และแทบจะไม่มีการเสียดสีเลย วัศดุไม่ต้องทนทั้งต่อแรงเสียดทานและความร้อนสูงในเวลาเดียวกัน ',
      en: 'Two semicircular blades are offset from the rotation center to form a pressure chamber that expands as they rotate, converting hot gas pressure into mechanical energy. Key advantages: 1. Exhaust leaves at low pressure without a valve, extracting near-maximum energy. 2. Blades slide on each other and are pushed apart by pressure, almost no friction. 3. Rotational motion around center means low vibration. 4. Gas hardly flows axially, low loss. 5. Symmetric 180° blades cancel vibration. 6. Smooth motion, low material stress, high RPM limited by bearings. 7. Few small parts, light and cheap. 8. No pre-ignition since combustor is separate. 9. Blades contact hot gas only half a turn with no rubbing, so material avoids combined heat and friction.'
    },
    imgSrc: 'images/concept.gif',
    imgAlt: { th: 'แนวคิดการทำงานของเทอร์ไบน์', en: 'Turbine concept' },
  },
  {
    title: { th: '3. ช่องทางไอร้อนแรงดันสูง', en: '3. High-Pressure Gas Inlet' },
    text: {
      th: 'ช่องทางไอร้อนแรงดันสูงตั้งอยู่กึ่งกลางระหว่างแกนหมุนของใบมีดทั้งสอง ไอร้อนจะเข้าห้องอัดแรงดันเพียงชั่วขณะสั้นๆ แล้วใบมีดหมุนพ้นช่อง แรงดันในห้องจะลดลงอย่างรวดเร็วจนเท่ากับบรรยากาศภายนอก ทำให้กังหันดึงพลังงานออกได้เกือบเต็มประสิทธิภาพ',
      en: 'The high-pressure gas port sits midway between the blade axes. Gas enters the pressure chamber briefly, then blades rotate past, dropping pressure to atmospheric, letting the turbine extract near-maximum energy.'
    },
    imgSrc: 'images/valve01.gif',
    imgAlt: { th: 'วาล์ว', en: 'Valve' },
  },
  {
    title: { th: '4. การออกแบบ ตัวใบมีด', en: '4. Blade Design' },
    text: {
      th: 'ใบมีดทั้งสองออกแบบเหมือนกัน เป็นรูปครึ่งวงกลม จุดศูนย์กลางการหมุนอยู่ที่ขอบใบมีด ห่างจากปลายใบมีดระยะ c ใบมีดหนาระยะ d สัดส่วนที่ถูกต้องคือ 2r = 4c + d โดย r คือรัศมีโค้งด้านในของใบมีด',
      en: 'Both blades are identical semicircles. Rotation center is at the blade edge, offset distance c from tip, thickness d. Correct proportion: 2r = 4c + d, where r is inner radius.'
    },
    imgSrc: 'images/BladeDesign01.jpg',
    imgAlt: { th: 'ใบพัดเทอร์ไบน์', en: 'Turbine blade' },
  },
  {
    title: { th: '5. ห้องเผาไหม้ และวาล์วบายพาส', en: '5. Combustion Chamber & Bypass Valve' },
    text: {
      th: 'ถัดจากช่องไอร้อนแรงดันสูงจะเป็นห้องสองชั้น ชั้นนอกรับแรงดันต่างจากภายนอกด้วยผนังหนา ชั้นในเป็นห้องเผาไหม้ทนความร้อน มีวาล์วบายพาสข้างๆ ผสมไอร้อนแรงดันสูงกับอากาศปกติเพื่อปรับอุณหภูมิและแรงดันก่อนเข้ากังหัน',
      en: 'Beyond the gas port is a double-wall chamber: outer wall handles pressure difference, inner is heat-resistant combustor with side bypass valve mixing high-pressure gas and air to tune temperature and pressure.'
    },
    imgSrc: 'images/chambervalve.gif',
    imgAlt: { th: 'ห้องเผาและวาล์ว', en: 'Chamber and valve' },
  },
  {
    title: { th: '6. คอมเพรสเซอร์', en: '6. Compressor' },
    text: {
      th: 'คอมเพรสเซอร์ดูดอากาศปกติจากภายนอกมาอัดให้แรงดันสูงส่งไปห้องเผาไหม้ แบบก้นหอยคู่แยกแกนหมุนนำแนวคิดก้นหอยคู่มาผสานกับแกสเทอร์ไบน์ขยายตัว อัดอากาศได้ต่อเนื่องโดยไม่ใช้วาล์ว',
      en: 'Compressor draws ambient air and compresses it for the combustor. Twin-scroll separated-axis type merges scroll concept with expanding gas turbine, enabling continuous compression without valves.'
    },
    imgSrc: 'images/pumpassembky.gif',
    imgAlt: { th: 'การประกอบปั๊ม', en: 'Pump assembly' },
  },
  {
    title: { th: '7. ความต่างในความเหมือน', en: '7. Difference in Similarity' },
    text: {
      th: 'คอมเพรสเซอร์ก้นหอยคู่แยกแกนหมุนหน้าตาคล้ายแบบก้นหอยคู่ธรรมดา แต่ทำงานต่างกัน โดยสร้างห้องอากาศแรงดันปกติแล้วค่อยๆ ลดขนาดห้องลงอย่างต่อเนื่อง โดยไม่อากาศหมุนตามแกน จึงเสียพลังงานจากการเคลื่อนที่ของอากาศน้อยมาก',
      en: 'Twin-scroll separated-axis compressor looks like a normal twin-scroll but works differently: it creates normal-pressure chambers then continuously shrinks them without axial air motion, losing little energy.'
    },
    imgSrc: 'images/pump.gif',
    imgAlt: { th: 'ปั๊ม', en: 'Pump' },
  },
]

export default function Presentation({ current, lang }) {
  return (
    <>
      {slidesData.map((s, i) => (
        <Slide key={i} {...s} active={i === current} lang={lang} />
      ))}
    </>
  )
}
