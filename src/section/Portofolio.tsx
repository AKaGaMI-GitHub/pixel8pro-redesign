import { Link } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { portofolioPixel } from '../context/Context';
import Button from '../component/Button';
import { motion } from 'framer-motion';

export default function Portofolio() {
  return (
    <div className="flex flex-col justify-center items-center text-[#343434] my-8 mx-2 md:mx-36">
        <div className="font-[600] text-[28px] md:text-[48px] text-center my-1.5 md:my-4">More from pixel portfolio</div>
        <Link to={'https://store.google.com/us/magazine/pixel_portfolio?hl=en-US'} className="flex flex-row items-center text-[#1A73E8] text-[18px] hover:underline" >See more pixel portfolio <MdOutlineArrowForwardIos className="text-[18px] mx-1.5" /></Link>
        <motion.div initial={{ y: -5, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.2 } }} viewport={{once : true}} className="flex flex-col md:flex-row">
            {portofolioPixel.map((index) => (
                <div key={index.id} className="flex flex-col justify-center bg-[#F1F1F1] rounded-md mx-4 my-4 md:my-12 p-4 md:p-8">
                    <img src={index.img}/>
                    <div className="font-[600] text-[24px]">{index.title}</div>
                    <div className="font-[500] text-[16px] h-8 mb-6 md:mb-12">{index.tagline}</div>
                    {index.priceDiscount ? (
                        <div className="font-[500] text-[20px]">From ${index.priceDiscount} <span className="line-through">${index.price}</span> <span className="text-green-600">Save ${Math.round(index.price - index.priceDiscount)}</span></div>
                    ) : (
                        <div className="font-[500] text-[20px]">From ${index.price}</div>
                    )}
                    <div className="font-[400] text-[16px]">{index.cicilanDeskripsi}</div>
                    <div className="flex justify-end">
                        <Button nameButton={"Buy"} link={index.linkBuy} />
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}
