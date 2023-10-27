import { Link } from 'react-router-dom'
import G3 from '../assets/phone/g3.png'
import ActuaDisplay from '../assets/phone/actualdisplay.png'
import { motion } from "framer-motion"

export default function Performance() {
  return (
    <section id="performance" className="flex flex-col items-center justify-center my-[40px] md:my-[18px] mx-4 md:mx-44 text-[#343434]">
      <p className="font-bold text-center w-auto md:w-[1000px] text-[28px] md:text-[40px] my-4 md:my-10">
        With Google AI and the best Pixel Camera, it's the most powerful, personal Pixel yet.
      </p>
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="flex flex-col justify-center my-4 md:my-8 items-center py-4 md:py-16 w-auto rounded-xl md:rounded-lg md:flex-row bg-[#CDDFF5] px-6 md:px-24">
        <img src={G3} className="w-[170px] h-[160px] md:w-[320px] md:h-[300px] mb-8 md:mb-0 mr-0 md:mr-20"/>
        <div className="flex flex-col justify-between">
          <div className="font-bold text-[28px] md:text-[40px] md:text-start text-center">The power and brains behind Pixel 8 Pro.</div>
          <div className="text-[16px] md:text-[20px] md:text-justify text-center my-4 md:my-6">The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. And it makes Pixel 8 Pro super fast and efficient.</div>
          <Link to={'https://blog.google/products/pixel/google-tensor-g3-pixel-8/'} className="text-[16px] font-bold hover:underline md:text-start text-center">Learn More</Link>
        </div>
      </motion.div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        <motion.div initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="flex flex-col justify-center items-center mb-4 md:mb-0 pt-4 md:pt-8 w-auto rounded-xl md:rounded-lg bg-[#CDDFF5] px-6 md:px-18 overflow-hidden">
            <div className="font-bold text-[28px] md:text-[32px] text-center" style={{zIndex: 99}}>6.7" Super Actua display. Pixel’s brightest ever</div>
            <div className="text-[16px] md:text-[20px] md:text-justify text-center my-2" style={{zIndex: 99}}>Only on Pixel 8 Pro</div>
            <img src={ActuaDisplay} className="relative right-6 w-[65%]"/>
        </motion.div>
        <motion.div initial={{ x: 15, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="actualdisplay flex flex-col h-[500px] md:h-auto justify-top items-center mb-4 md:mb-0 pt-4 md:pt-8 w-auto rounded-xl md:rounded-lg bg-[#CDDFF5] px-6 md:px-18">
            <div className="font-bold text-[28px] md:text-[32px] text-center" style={{zIndex: 99}}>Polished aluminum frame and matte back glass.</div>
            <div className="text-[16px] md:text-[20px] md:text-justify text-center my-2" style={{zIndex: 99}}>Only on Pixel 8 Pro</div>
        </motion.div>
      </div>
    </section>
  )
}
