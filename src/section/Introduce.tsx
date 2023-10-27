import { useState } from 'react'
import FrontBlue from '../assets/phone/front.webp'
import FrontBlack from '../assets/phone/frontobs.webp'
import FrontGold from '../assets/phone/fontgold.webp'
import BackBlue from '../assets/phone/back.webp'
import BackBlack from '../assets/phone/backobs.webp'
import BackGold from '../assets/phone/backgold.webp'
import Button from '../component/Button'
import { coloPhone } from '../context/Context'
import { motion } from "framer-motion"


export default function Introduce() {
  type colorType = {
    id: number;
    colorName: string;
    colorCode: string;
  }

  const [colorPicker, setColor] = useState<number>(1);
  const [nameColor, setNameColor] = useState<string>('Bay');

  const color = (colorData: colorType) => {
    setColor(colorData.id)
    setNameColor(colorData.colorName)
  }

  return (
    <section id="introduction" className="flex flex-wrap items-center justify-center pt-4 md:pt-8">
      <div className="flex flex-row justify-center items-center h-full px-2 mx-0 md:mx-6 my-4 bg-[#CDDFF5] text-[#343434] rounded-none md:rounded-xl overflow-hidden">
        <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}}>
          <img src={FrontBlue} className={`relative top-24 w-[100%] hidden md:${colorPicker == 1 ? `block` : `hidden`}`}/>
          <img src={FrontBlack} className={`relative top-24 w-[100%] hidden md:${colorPicker == 2 ? `block` : `hidden`}`}/>
          <img src={FrontGold} className={`relative top-24 w-[100%] hidden md:${colorPicker == 3 ? `block` : `hidden`}`}/>
        </motion.div>
        <div className="hidden my-8 text-center md:block">
          <div className="text-[32px] my-2">Pixel 8 Pro</div>
          <div className="text-[40px] font-bold my-2">The best of Google. Even more pro.</div>
          <div className="flex flex-row justify-center">
            {coloPhone.map((index) => (
              <div key={index.id} className={`p-1 rounded-full mr-1.5 md:m-1.5 flex items-center ${colorPicker == index.id ? `active` : `disable`}`} onClick={() => color(index)}>
                <div style={{ backgroundColor: `${index.colorCode}` }} className={`p-2 border border-gray-500 rounded-full`}></div>
              </div>
            ))}
          </div>
          <div className="text-[14px] font-[400] m-2">Color : {nameColor}</div>
          <div className="text-[28px] font-bold">Start From $999</div>
          <div className="text-[16px] font-[500] mb-8">or $27.75/month with 36-month financing*</div>
          <Button nameButton={"Buy"} link={"https://store.google.com/us/config/pixel_8_pro?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiY0dsNFpXeGZPRjl3Y204PSJ9"}/>
        </div>
        <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}}>
          <img src={BackBlue} className={`w-[100%] ${colorPicker == 1 ? `block` : `hidden`}`}/>
          <img src={BackBlack} className={`w-[100%] ${colorPicker == 2 ? `block` : `hidden`}`}/>
          <img src={BackGold} className={`w-[100%] ${colorPicker == 3 ? `block` : `hidden`}`}/>
        </motion.div>
      </div>
      <div className="flex flex-col block mx-4 md:hidden">
        <div className="flex flex-row justify-center">
          {coloPhone.map((index) => (
            <div key={index.id} className={`p-1 rounded-full items-center ${colorPicker == index.id ? `active` : `disable`}`} onClick={() => color(index)}>
              <div style={{ backgroundColor: `${index.colorCode}` }} className={`p-2 border border-gray-500 rounded-full`}></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-center text-[#343434]">
          <div className="text-[12px] font-[400] m-2 text-center">Color : {nameColor}</div>
          <div className="text-[20px] my-2">Pixel 8 Pro</div>
          <div className="text-[32px] font-bold my-2">The best of Google. Even more pro.</div>
          <div className="text-[20px] font-bold">From $999</div>
          <div className="text-[14px] font-[500] mb-2">or $27.75/month with 36-month financing*</div>
          <Button nameButton={"Buy"} link={"https://store.google.com/us/config/pixel_8_pro?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiY0dsNFpXeGZPRjl3Y204PSJ9"}/>
        </div>
      </div>
    </section>
  )
}
