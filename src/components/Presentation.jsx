import Slide from './Slide.jsx'
import AdvantagesDropdown from './AdvantagesDropdown.jsx'

export const slidesData = [
  {
    title: { th: '1. หลักการทำงานของเทอร์ไบน์', en: '1. Turbine Working Principle' },
    text: {
      th: 'ใบมีด 2 ใบเป็นรูปครึ่งวงกลม วางเยื้องจุดศูนย์กลางการหมุนห่างกันพอดี เพื่อสร้างห้องอัดแรงดันที่ขยายตัวได้เมื่อใบมีดหมุน แรงดันไอร้อนจึงถูกแปลงเป็นพลังงานกล',
      en: 'Two semicircular blades are offset from the rotation center to form a pressure chamber that expands as they rotate, converting hot gas pressure into mechanical energy.',
    },
    advantages: true,
    imgSrc: '/concept.gif',
    imgAlt: { th: 'แนวคิดการทำงานของเทอร์ไบน์', en: 'Turbine concept' },
  },
  {
    title: { th: '2. ช่องทางไอร้อนแรงดันสูง', en: '2. High-Pressure Gas Inlet' },
    text: {
      th: 'ช่องทางไอร้อนแรงดันสูงตั้งอยู่กึ่งกลางระหว่างแกนหมุนของใบมีดทั้งสอง ไอร้อนจะเข้าห้องอัดแรงดันเพียงชั่วขณะสั้นๆ แล้วใบมีดหมุนพ้นช่อง แรงดันในห้องจะลดลงอย่างรวดเร็วจนเท่ากับบรรยากาศภายนอก ทำให้กังหันดึงพลังงานออกได้เกือบเต็มประสิทธิภาพ',
      en: 'The high-pressure gas port sits midway between the blade axes. Gas enters the pressure chamber briefly, then blades rotate past, dropping pressure to atmospheric, letting the turbine extract near-maximum energy.'
    },
    imgSrc: '/valve01.gif',
    imgAlt: { th: 'วาล์ว', en: 'Valve' },
  },
  {
    title: { th: '3. โครงสร้างของเทอร์ไบน์', en: '3. Turbine Structure' },
    text: {
      th: 'ภายในตัวเรือนเทอร์ไบน์จะมีจานเกียร์ 2 ชุด หันหน้าประกบติดกัน แต่ละจานเกียร์ต่อกับใบพัดเป็นชิ้นเดียว และตั้งฉากกับจานเกียร์ กำลังจะถูกส่งจากขอบจานเกียร์ไปยังเพลาขับคู่ที่วางขนานอยู่ฝั่งตรงข้าม',
      en: 'Inside the turbine housing there are two gear discs facing each other. Each disc is integrated with a blade and perpendicular to the disc. Power is transmitted from the disc edge to a pair of parallel drive shafts on the opposite side.'
    },
    imgSrc: '/assembly01.gif',
    imgAlt: { th: 'การประกอบเครื่องยนต์', en: 'Engine assembly' },
  },
  {
    title: { th: '4. การออกแบบ ตัวใบมีด', en: '4. Blade Design' },
    text: {
      th: 'ใบมีดทั้งสองออกแบบเหมือนกัน เป็นรูปครึ่งวงกลม จุดศูนย์กลางการหมุนอยู่ที่ขอบใบมีด ห่างจากปลายใบมีดระยะ c ใบมีดหนาระยะ d สัดส่วนที่ถูกต้องคือ 2r = 4c + d โดย r คือรัศมีโค้งด้านในของใบมีด',
      en: 'Both blades are identical semicircles. Rotation center is at the blade edge, offset distance c from tip, thickness d. Correct proportion: 2r = 4c + d, where r is inner radius.'
    },
    imgSrc: '/BladeDesign01.jpg',
    imgAlt: { th: 'ใบพัดเทอร์ไบน์', en: 'Turbine blade' },
  },
  {
    title: { th: '5. ห้องเผาไหม้ และวาล์วบายพาส', en: '5. Combustion Chamber & Bypass Valve' },
    text: {
      th: 'ถัดจากช่องไอร้อนแรงดันสูงจะเป็นห้องสองชั้น ชั้นนอกรับแรงดันต่างจากภายนอกด้วยผนังหนา ชั้นในเป็นห้องเผาไหม้ทนความร้อน มีวาล์วบายพาสข้างๆ ผสมไอร้อนแรงดันสูงกับอากาศปกติเพื่อปรับอุณหภูมิและแรงดันก่อนเข้ากังหัน',
      en: 'Beyond the gas port is a double-wall chamber: outer wall handles pressure difference, inner is heat-resistant combustor with side bypass valve mixing high-pressure gas and air to tune temperature and pressure.'
    },
    imgSrc: '/chambervalve.gif',
    imgAlt: { th: 'ห้องเผาและวาล์ว', en: 'Chamber and valve' },
  },
  {
    title: { th: '6. คอมเพรสเซอร์', en: '6. Compressor' },
    text: {
      th: 'คอมเพรสเซอร์ดูดอากาศปกติจากภายนอกมาอัดให้แรงดันสูงส่งไปห้องเผาไหม้ แบบก้นหอยคู่แยกแกนหมุนนำแนวคิดก้นหอยคู่มาผสานกับแกสเทอร์ไบน์ขยายตัว อัดอากาศได้ต่อเนื่องโดยไม่ใช้วาล์ว',
      en: 'Compressor draws ambient air and compresses it for the combustor. Twin-scroll separated-axis type merges scroll concept with expanding gas turbine, enabling continuous compression without valves.'
    },
    imgSrc: '/pumpassembky.gif',
    imgAlt: { th: 'การประกอบปั๊ม', en: 'Pump assembly' },
  },
  {
    title: { th: '7. ความต่างในความเหมือน', en: '7. Difference in Similarity' },
    text: {
      th: 'คอมเพรสเซอร์ก้นหอยคู่แยกแกนหมุนหน้าตาคล้ายแบบก้นหอยคู่ธรรมดา แต่ทำงานต่างกัน โดยสร้างห้องอากาศแรงดันปกติแล้วค่อยๆ ลดขนาดห้องลงอย่างต่อเนื่อง โดยไม่อากาศหมุนตามแกน จึงเสียพลังงานจากการเคลื่อนที่ของอากาศน้อยมาก',
      en: 'A twin-scroll split-axis compressor is similar to a conventional twin-scroll compressor, but operates differently: it first builds up the normal pressure chambers and then gradually reduces the size of these chambers. This low circumferential airflow minimizes energy loss..'
    },
    imgSrc: '/pump.gif',
    imgAlt: { th: 'ปั๊ม', en: 'Pump' },
  },
  {
    title: { th: 'ข้อสรุป / คำลงท้าย', en: 'Conclusion / Closing' },
    text: {
      th: 'คุณอาจจะไม่เชื่อว่าจริงๆแล้ว ที่มาของไอเดียนี้ มันเริ่มต้น มาตั้งแต่สมัยผมเรียนมัถยม ทันทีที่เรียนวิทยาศาสตร์แล้วเห็นภาพประกอบและหลักการทำงานของเครื่องยนตืสันดาปภายใน ผมก็รู้สึกว่า มันน่าจะมีวิธีที่ดีกว่าข้อเหวี่ยงกับก้านลูกสูบนั่น มันกลายเป็นความรู้สึกขัดใจเล็กๆที่ติดค้างในใจมาตั้งแต่นั้น ราวๆปี 1999 ในปีที่ผมเรียนจบ ไม่นานนัก ผมก็เก็บเรื่องนี้ขึ้นมาปัดฝุ่นแล้ว เจ้าสิ่งนี้ ก็เป็นรูปเป็นร่างขึ้นมา ทีแรกผมก็ประหลาดใจ ที่คำตอบมันเรียบง่ายมาก ก็แค่ครึ่งวงกลม เท่านั้นเอง แค่จับมาหมุนโดยแยกแกนหมุนออกจากกัน มันก็เท่านั้น แม้จะมีคำตอบที่ทำให้ความรู้สึกค้างคาใจหายไปได้แล้ว แต่มันก็ยังมีสิ่งใหม่ขัดใจ นั่นคือถึงจะรู้คำตอบ แต่ปฏิบัติจริงไม่ไ่ด้ การจะสร้างเครื่องยนต์ออกมาจริงๆต้องใช้เงิน เวลา ความรู้เฉพาะทางโดยเฉพาะวัศดุ กับการขึ้นรูป ในขณะที่ผมใช้เวลาส่วนใหญ่ไปกับการเลี้ยงชีพไปเรื่อยๆ ครั้งหนึ่งผมเคยคิดจะจดลิทธิบัตรแต่ก็ล้มเลิกไป เพราะในความเป็นจริงการจดสิทธิบัตรโโยไม่มีตัวสินค้าออกมามันไม่เวิร์คจริง คุณอาจจะไม่เชื่อว่าจริงๆ แล้ว ที่มาของไอเดียนี้มันเริ่มต้นมาตั้งแต่สมัยผมเรียนมัธยม ทันทีที่ได้เรียนรู้วิทยาศาสตร์และเห็นภาพประกอบรวมถึงหลักการทำงานของเครื่องยนต์สันดาปภายใน ผมก็รู้สึกขึ้นมาว่า มันน่าจะมีวิธีที่ดีกว่าการใช้เพลาข้อเหวี่ยงกับก้านลูกสูบสิ กลายเป็นความรู้สึกขัดใจเล็กๆ ที่ติดค้างอยู่ในใจตั้งแต่นั้นมาราวๆ ปี 1999 ในปีที่ผมเรียนจบได้ไม่นานนัก ผมก็เก็บเรื่องนี้ขึ้นมาปัดฝุ่นใหม่อีกครั้ง จนกระทั่งเจ้าสิ่งนี้ก็เริ่มเป็นรูปเป็นร่างขึ้นมา ทีแรกผมก็อดประหลาดใจไม่ได้ว่าคำตอบมันช่างเรียบง่ายเสียเหลือเกิน—ก็แค่รูปทรงครึ่งวงกลมเท่านั้นเอง แค่จับมาหมุนโดยแยกแกนหมุนออกจากกัน มันก็แค่นั้นเอง แม้จะมีคำตอบที่ช่วยให้ความรู้สึกค้างคาใจหายไปได้แล้ว แต่มันก็ยังมีความขัดใจเรื่องใหม่ตามมา นั่นคือ ถึงจะรู้คำตอบ แต่ในทางปฏิบัติจริงกลับทำไม่ได้ การจะสร้างเครื่องยนต์ออกมาจริงๆนั้น ต้องอาศัยทั้งเงินทุน เวลา ความรู้เฉพาะทาง โดยเฉพาะเรื่องวัสดุศาสตร์และการขึ้นรูป ในขณะที่ตัวผมเองต้องใช้เวลาส่วนใหญ่ไปกับการดิ้นรนเลี้ยงชีพ ครั้งหนึ่งผมเคยคิดจะจดสิทธิบัตร แต่ก็ต้องล้มเลิกไป เพราะในความเป็นจริง การจดสิทธิบัตรโดยที่ไม่มีตัวสินค้าออกมาจริงๆ นั้นมันไม่เวิร์คเอาเสียเลย ในตอนนี้ที่ผมกำลังจะอายุ 50 ปี ผมเริ่มเตรียมตัวอย่างจริงจังที่จะเกษียณอายุ มันมีความรู้สึกเศร้าเล็กๆ อยู่ในใจว่า สิ่งที่อาจจะดีกับผู้คนเหล่านี้ กลับไม่เป็นที่รู้จัก ไม่ถูกนำไปต่อยอด ไม่ก่อให้เกิดประโยชน์ และต้องตายไปพร้อมกับคนที่ค้นพบมัน ผมจึงตัดสินใจที่จะเผยแพร่ให้มันเป็น สมบัติสาธารณะ เพื่อให้ใครก็ตามที่สนใจ สามารถหยิบมันไปทดลองและพัฒนาต่อยอดได้ แม้ว่ามันจะไม่สร้างประโยชน์ใดๆ ให้แก่ตัวผมเองเลยก็ตามที แต่ถ้ามันได้สร้างประโยชน์ให้กับผู้คน ผมก็ยินดีครับในตอนนี้ที่ผมกำลังจะ อายุ 50 ผมเริ่มเตรียมตัวอย่างจริงจังที่จะเกษียนอายุ มันเป็นความรู้สึกเศร้าเล็กๆ ที่สิ่งที่อาจจะดีกับผู้คนนั้น ไม่เป็นที่รู้จัก ไม่ถูกนำไปต่อยอด ไม่ก่อประโยชน์ และตายไปพร้อมกับคนที่ค้นพบมัน ผมเลยตัดสินใจที่จะเผยแพร่ ให้มันเป็นสาธารณะสมบัติ ให้ใครที่สนใจหยิบมันไปทดลอง และพัฒนาต่อยอด แม้ว่ามันจะไม่เป็นประโยชน์กับผม ถ้ามันเป็นประโยชน์กับผู้คน ผมก็ยินดี ',
      en: "You might find it hard to believe, but the origin of this idea dates back to my high school years. The moment I learned about science and saw the diagrams and working principles of an internal combustion engine, I felt that there had to be a better way than using a crankshaft and connecting rods. It became a lingering, nagging thought in the back of my mind ever since. Around 1999, shortly after I graduated, I dusted off the idea, and this creation finally started taking shape. At first, I was surprised by how simple the answer was—just a semi-circle. You simply rotate them by offsetting their axes of rotation. That was it. Even though finding the answer put my lingering doubts to rest, a new frustration arose: knowing the answer was one thing, but making it a reality was another. Building an actual engine requires money, time, specialized knowledge—especially regarding materials and manufacturing processes—while I spent most of my time simply trying to make a living. At one point, I considered patenting it, but I gave up on the idea because, in reality, getting a patent without a physical product doesn't really work. Now, as I approach my 50s, I am seriously preparing for retirement. There is a quiet sadness in knowing that something potentially beneficial to people might remain unknown, never developed, and never put to use—dying along with the person who discovered it. Therefore, I have decided to release it into the public domain so that anyone interested can pick it up, test it, and develop it further. Even if it brings no benefit to me personally, I will be more than happy if it brings value to others."
    },
    imgSrc: '/concept.gif',
    imgAlt: { th: 'สรุปแนวคิดเทอร์ไบน์', en: 'Turbine concept summary' },
  },
]

export default function Presentation({ current, lang }) {
  const currentSlide = slidesData[current];
  return (
    <>
      <header className="title-header">
        <h1>{currentSlide.title[lang]}</h1>
      </header>
      {slidesData.map((s, i) => (
        <Slide
          key={i}
          {...s}
          active={i === current}
          lang={lang}
          isConclusion={i === slidesData.length - 1}
          AdvantagesDropdown={s.advantages ? AdvantagesDropdown : null}
        />
      ))}
    </>
  )
}
