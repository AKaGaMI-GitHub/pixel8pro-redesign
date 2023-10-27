import { SecurityImage, SecurityImageResponsive, SecurityUpdateImage, securityDetails } from '../context/Context'
import { motion } from "framer-motion"

export default function SafeSecurity() {
  return (
    <section id="safesecurity" className="text-[#343434] flex flex-col justify-center items-center mt-2 md:mt-4 py-8 md:py-14 overflow-visible">
        <div className="px-4 text-center md:px-88">
          <div className="text-[14px] md:text-[20px] font-[500]">Safety and security</div>
          <div className="text-center font-[500] text-[28px] md:text-[48px] font-[600] w-full md:w-[40rem] my-2">
              Pixel helps keep you and your info safe.
          </div>
        </div>
        <motion.div initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}}>
          <img src={SecurityImage} className="my-12 w-[1306px] hidden md:block"/>
          <img src={SecurityImageResponsive} className="block w-auto py-4 md:hidden"/>
        </motion.div>
        <motion.div initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="bg-[#CDDFF5] p-8 md:px-20 md:py-12 flex md:flex-row flex-col justify-center rounded-xl mx-4 my-4 md:my-12 md:mx-36">
          <img src={SecurityUpdateImage} className="rounded-md w-[440px] mr-12"/>
          <div className="flex flex-col justify-center">
            <div className="text-[32px] md:text-[48px] font-[600] text-center md:text-left my-4">Security updates for 7 years.</div>
            <div className="text-center md:text-justify text-[18px] md:text-[24px] font-[400]">
              First pixel phone have security updates for 7 years, 
              this is for protect you and your sensitive data, 
              Pixel comes with security updates, so your Pixel gets even more secure over time.
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="flex flex-col mx-1.5 md:flex-row md:mx-[9rem]">
          {securityDetails.map((index) => (
            <div key={index.id} className="flex flex-col items-center mx-2 p-8 bg-[#CDDFF5] rounded-xl w-auto md:w-[18.5rem] mb-4">
              <div className="font-[600] text-[24px] text-center mb-4">{index.title}</div>
              <div className="font-[400] text-[18px] text-center">{index.description}</div>
            </div>
          ))}
        </motion.div>
    </section>
  )
}
