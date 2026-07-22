import { useState } from 'react';

const advantagesData = {
  th: [
    'ไอร้อนไหลออกที่แรงดันต่ำโดยไม่ผ่านวาล์ว จึงดึงพลังงานออกได้เกือบเต็มที่',
    'ใบมีดเลื่อนไถลบนผิวกันเองและถูกแรงดันผลักแยก จึงแทบไม่มีแรงเสียดทาน',
    'เคลื่อนที่แบบหมุนรอบจุดศูนย์กลาง สั่นสะเทือนน้อย',
    'ไอร้อนแทบไม่ไหลตามแกนหมุน เสียพลังงานน้อย',
    'ใบมีดสมมาตร 180 องศา หักล้างแรงสั่นสะเทือนกันเองได้ดี',
    'เคลื่อนที่สม่ำเสมอ วัสดุรับแรงน้อย ความเร็วรอบสูงได้ขึ้นอยู่กับแบริ่งและวัสดุ ให้แรงม้าได้สูงมากตามความเร็วรอบ',
    'ขนาดเล็กชิ้นส่วนน้อย เฮ้าส์ซิ่งมีขนาดใหญ่กว่าตัวใบมีดเพียงเล็กน้อย จึงทำให้มีน้ำหนักเบาและต้นทุนต่ำ',
    'ไม่มีการชิงจุดระเบิดก่อนเวลา เพราะแยกห้องเผาไหม้ออกจากกังหันโดยสิ้นเชิง',
    'กังหันมีเวลาสัมผัสไอร้อนเพียงครึ่งรอบ และแทบจะไม่มีการเสียดสีเลย วัสดุไม่จำเป็นต้องทนทานต่อแรงเสียดทานและความร้อนสูงในเวลาเดียวกัน',
  ],
  en: [
    'Exhaust leaves at low pressure without a valve, extracting near-maximum energy.',
    'Blades slide on each other and are pushed apart by pressure, almost no friction.',
    'Rotational motion around center means low vibration.',
    'Gas hardly flows in round direction, low loss.',
    'Symmetric 180° blades cancel each other\'s vibration.',
    'Smooth motion, low material stress, high RPM limited by bearings resulting in high horsepower due to high RPM.',
    'Few small parts, light and cheap.',
    'No pre-ignition since combustor is separate.',
    'Blades contact hot gas only half a turn with no rubbing, so material avoids combined heat and friction.',
  ],
};

export default function AdvantagesDropdown({ lang }) {
  const [isOpen, setIsOpen] = useState(true);
  const advantages = advantagesData[lang];

  return (
    <div className="advantages-dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {lang === 'th' ? '▼ ข้อดีสำคัญ 9 ข้อ (คลิกเพื่อขยาย)' : '▼ 9 Key Advantages (click to expand)'}
      </button>
      {isOpen && (
        <ul className="dropdown-list" role="listbox">
          {advantages.map((adv, i) => (
            <li key={i} className="dropdown-item" role="option">
              <span className="advantage-number">{i + 1}.</span>
              <span className="advantage-text">{adv}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}